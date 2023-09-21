import React from 'react'

const products = [
    { id: 1, name: 'Remera', price: 1500, category: 'remera', img: `https://cdn.pixabay.com/photo/2017/01/13/04/56/t-shirt-1976334_1280.png`, stock: 13, description: 'Remera blanca mangas cortas' },
    { id: 4, name: 'Remera', price: 1500, category: 'remera', img: `https://http2.mlstatic.com/D_NQ_NP_831858-MLA48044614602_102021-W.webp`, stock: 13, description: 'Remera blanca mangas cortas' },
    { id: 5, name: 'Remera', price: 1500, category: 'remera', img: `https://http2.mlstatic.com/D_NQ_NP_926048-MLA51344638387_082022-W.webp`, stock: 13, description: 'Remera blanca mangas cortas' },
    { id: 2, name: 'Zapatillas Nike', price: 2000, category: 'zapatillas', img: 'https://http2.mlstatic.com/D_NQ_NP_736440-MLA71802445637_092023-W.webp', stock: 5, description: 'Zapatiilas Nike' },
    { id: 3, name: 'Pantalon', price: 1800, category: 'pantalon', img: 'https://http2.mlstatic.com/D_NQ_NP_607050-MLA69546601391_052023-W.webp', stock: 15, description: 'Pantalon Jean' },
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() =>{
            resolve(products)
        }, 5000)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === parseInt(productId)))
        }, 500)
    })
}

export const getProductsByCategory = (productCat) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === (productCat)))
        }, 500)
    })
}
