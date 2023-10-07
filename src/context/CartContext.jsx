import { createContext, useState } from "react";

export const CartContext = createContext({
    cart: []
})

export const CartProvider = ({ children }) =>{
    const [cart, setCart] = useState([])
    console.log(cart)


const addItem = (item, quantity) => {
    if(!isInCart(item.id)) {
        setCart(prev => [...prev, {...item, quantity}])
    } else {
        // Si el producto ya está en el carrito, actualiza la cantidad
        setCart((prev) =>
          prev.map((product) =>
            product.id === item.id
              ? { ...product, quantity: product.quantity + quantity }
              : product
          )
        );
      }
    };

const removeItem = (itemId) => {
    const cartUpdated = cart.filter(prod => prod.id !== itemId)
    setCart(cartUpdated)
}

const clearCart = () => {
    setCart([])
}

const isInCart = (itemId) => {
    return cart.some(prod => prod.id === itemId)
}

const totalQuantity = cart.reduce((total, product) => total + product.quantity, 0);
const total = cart.reduce((total, product)=> total + product.quantity*product.price, 0);

return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalQuantity, total }}>
        { children }
    </CartContext.Provider>
)
}