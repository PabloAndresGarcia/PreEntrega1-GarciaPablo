import { useState } from 'react'
import Checkout from '../Checkout/Checkout'

const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState ('')
    const [phone, setPhone] = useState ('')
    const [email, setEmail] = useState ('')

    const handleConfirm = (event) =>
    event.preventDefault()

    const userData = {
        name, phone, email
    }
    onConfirm(userData)

    return (
        <div>
            <form onSubmit={handleConfirm} className='grid items-center justify-center m-10 p-5'>
                <label className='grid pb-3'>
                    Nombre:
                    <input
                        className=''
                        type="text"
                        value={name}
                        onChange={({target})=> setName(target.value)} />
                </label>
                <label className=''>
                    Telefono:
                    <input
                        className=''
                        type="text"
                        value={phone}
                        onChange={({target})=> setPhone(target.value)} />
                </label>
                <label className=''>
                    Email
                    <input
                        className=''
                        type="text"
                        value={email}
                        onChange={({target})=> setEmail(target.value)} />
                </label>
                <div className=''>
                    <button type='submit' className=''>Crear Orden</button>
                </div>

            </form>
        </div>
    )

}
export default CheckoutForm
