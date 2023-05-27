import { createContext, useState } from "react";

export const CartContext = createContext ({
    cart: []
})

export const CartProvider = ({ children}) => {
    const [cart, setCart]=useState([])

    const totalQuantity = () => {
        let quantity = 0
        cart.forEach ((item) => quantity += item.quantity)
        return quantity
    }
    

    const addItem = (item, quantity) => {
        if(!isInCart(item.id)){
            setCart(prev => [...prev,{...item,quantity}])
        }else{
            console.error('El producto ya fue agregado')
        }
    }

    const removeItem = (itemId)=> {
        const cartUpdated = cart.filter(item => item.id !== itemId)
        setCart (cartUpdated)
    }
    
    const clearCart = () =>{
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some (item => item.id === itemId)
    }

    const total = () => {
        return cart.reduce((total, item) => total += item.quantity * item.price, 0)
    }

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clearCart, totalQuantity, total}}>
            {children}
        </CartContext.Provider>
    )
}