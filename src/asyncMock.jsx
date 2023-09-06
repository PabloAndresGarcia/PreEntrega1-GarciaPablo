import React from 'react'

const products = [
    { id: 1, name: 'Remera', price: 1500, category: 'Remera', img: `https://cdn.pixabay.com/photo/2017/01/13/04/56/t-shirt-1976334_1280.png`, stock: 13, description: 'Remera blanca mangas cortas' },
    { id: 2, name: 'Zapatillas Nike', price: 2000, category: 'Zapatillas', img: 'https://cdn.pixabay.com/photo/2023/05/03/22/43/tennis-7968714_1280.png', stock: 5, description: '' },
    { id: 3, name: 'Producto 3', price: 1000, category: 'Pantalon', img: '', stock: 15, description: '' },
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() =>{
            resolve(products)
        }, 2000)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.id === parseInt(productId)))
        }, 500)
    })
}

export const getProductsByCategory = (productCat) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === parseInt(productCat)))
        }, 500)
    })
}
