import { useState } from 'react'
import Checkout from '../Checkout/Checkout'

const CheckoutForm = ({ onConfirm }) => {
    const [name, setName] = useState ('')
    const [phone, setPhone] = useState ('')
    const [email, setEmail] = useState ('')

    const handleConfirm = (event) =>{
    event.preventDefault()

    const userData = {name, phone, email}
    onConfirm(userData);
}

    return (
        <div>
            <form onSubmit={handleConfirm} className='grid items-center justify-center m-10 p-5'>
                <label className='grid mb-3 text-xl border-solid border-2 rounded-md border-primary'>
            
                    <input
                        className='pl-2 rounded-md'
                        type="text"
                        value={name}
                        placeholder='Nombre' 
                        onChange={({target})=> setName(target.value)} />
                </label>
                <label className='grid mb-3 text-xl border-solid border-2 rounded-md border-primary'>
               
                    <input
                        className='pl-2 rounded-md'
                        type="text"
                        value={phone}
                        placeholder='Telefono' 
                        onChange={({target})=> setPhone(target.value)} />
                </label>
                <label className='grid mb-3 text-xl border-solid border-2 rounded-md border-primary'>
                
                    <input
                        className='pl-2 rounded-md'
                        type="text"
                        value={email}
                        placeholder='Correo electrónico'
                        onChange={({target})=> setEmail(target.value)} />
                </label>
                <div className=''>
                    <button type='submit' className='flex m-10 p-1 rounded-xl text-xl font-bold text-secondary-900 bg-primary hover:text-primary hover:bg-secondary-100 items-center justify-center'>Crear Orden</button>
                </div>

            </form>
        </div>
    )

}
export default CheckoutForm
