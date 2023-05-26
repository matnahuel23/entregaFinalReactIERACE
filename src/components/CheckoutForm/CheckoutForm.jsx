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
        <div className='Container'>
            <form onSubmit={handleConfirm} className='Form'>
                <label className='Label'>
                    Nombre
                    <input
                        className='Input'
                        type='text'
                        value={name}
                        onChange={({target}) => setName (target.value)}
                    />
                </label>
                <label className='Label'>
                    Teléfono
                    <input
                        className='Input'
                        type='tel'
                        value={phone}
                        onChange={({target}) => setPhone (target.value)}
                    />
                </label>
                <label className='Label'>
                    Email
                    <input
                        className='Input'
                        type='email'
                        value={email}
                        onChange={({target}) => setEmail (target.value)}
                    />
                </label>
            </form>
        </div>
    )
}

export default CheckoutForm;