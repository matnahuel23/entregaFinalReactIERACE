import './CheckoutForm.css'
import { useState } from 'react';

const CheckoutForm = ({onConfirm}) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const handleConfirm = (event) => {
        event.preventDefault()
        const userData ={
            name, phone, email
        }
        onConfirm (userData)
    }

    return(
        <div className='Container' class="mb-3">
            <form onSubmit={handleConfirm} className='Form'>
                <label className='Label' for="exampleFormControlInput1" class="form-label">
                    Nombre
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Juan Perez"
                        className='Input'
                        value={name}
                        onChange={({target}) => setName (target.value)}
                    />
                </label>
                <label className='Label' for="exampleFormControlInput2" class="form-label">
                    Teléfono
                    <input type="tel" class="form-control" id="exampleFormControlInput2" placeholder="12345"
                        className='Input'
                        value={phone}
                        onChange={({target}) => setPhone (target.value)}
                    />
                </label>
                <label className='Label' for="exampleFormControlInput3" class="form-label">
                    Email   
                    <input type="email" class="form-control" id="exampleFormControlInput3" placeholder="name@example.com"
                        className='Input'
                        value={email}
                        onChange={({target}) => setEmail (target.value)}
                    />
                </label>
                <div className='Label'>
                    <button type='submit' className='Button' class="btn btn-success">Crear Orden</button>    
                </div>
            </form>
        </div>
    )
}

export default CheckoutForm;