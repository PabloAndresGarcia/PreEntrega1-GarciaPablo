const products = [
    { id: 1, name: 'Producto 1', price: 1000, category: 'Remera', img: '', stock: 15, description: '' },
    { id: 2, name: 'Producto 2', price: 1000, category: 'Remera', img: '', stock: 15, description: '' },
    { id: 3, name: 'Producto 3', price: 1000, category: 'Remera', img: '', stock: 15, description: '' },
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() =>{
            resolve(products)
        }, 500)
    })
}