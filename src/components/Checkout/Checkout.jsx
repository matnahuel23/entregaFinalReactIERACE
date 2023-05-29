import { writeBatch, query, where, collection,Timestamp, addDoc, documentId, getDocs } from "firebase/firestore";
import { useContext, useState } from "react";
import { CartContext} from '../../context/CartContext';
import { db } from "../../service/firebase/fireBaseConfig";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import Swal from 'sweetalert2';
import ReactLoading from "react-loading"

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState ('')

    const {cart, total, clearCart} = useContext (CartContext)

    const createOrder = async ({ name, phone, email}) => {
        setLoading (true)

        try {
            const objOrder = {
                buyer: {
                    name, phone, email
                },
                    items: cart,
                    total: total(),
                    date: Timestamp.fromDate(new Date())
                }

            const batch = writeBatch(db)
            const outOfStock = []
            const ids = cart.map(prod => prod.id)
            const productsRef = collection(db, 'producto')
            const productsAddedFromFirestore = await getDocs (query(productsRef, where (documentId(), 'in', ids)));
            
            const {docs} = productsAddedFromFirestore

            docs.forEach( doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity

                if (stockDb >= prodQuantity){
                    batch.update(doc.ref, {stock: stockDb - prodQuantity})
                } else {
                    outOfStock.push({id: doc.id, ...dataDoc})
                }             
            })

            if(outOfStock.length === 0){

                await batch.commit ()

                const orderRef = collection (db, 'orders')
                const orderAdded = await addDoc (orderRef, objOrder)

                setOrderId(orderAdded.id)
                clearCart ()
            } else {
                console.error('hay productos que no estan disponibles en el stock')
            }

        } catch (error){
            console.log(error)
        } finally {
            setLoading (false)
        }}

        if (loading) {
            return (
              <div className='Carga'>
                <ReactLoading type="spin" color="#000" height={100} width={100} />
                <h1>Cargando</h1>
              </div>
            );
          }
        
          if (orderId) {
            Swal.fire({
              title: 'Tu orden fue confirmada',
              html: `El id de su pedido es: <strong style="font-size: 20px">${orderId}</strong>`,
              icon: 'success'
            }).then(() => {
              window.location.href = '/';
            });
          }

    return (
        <div id="datosPersonales">
            <h1>Datos Personales</h1>
            <CheckoutForm onConfirm={createOrder}/>
        </div>
    )
}

export default Checkout