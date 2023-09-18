import React from 'react'

const products = [
    { id: 1, name: 'Remera', price: 1500, category: 'remera', img: `https://cdn.pixabay.com/photo/2017/01/13/04/56/t-shirt-1976334_1280.png`, stock: 13, description: 'Remera blanca mangas cortas' },
    { id: 4, name: 'Remera', price: 1500, category: 'remera', img: `https://cdn.pixabay.com/photo/2017/01/13/04/56/t-shirt-1976334_1280.png`, stock: 13, description: 'Remera blanca mangas cortas' },
    { id: 5, name: 'Remera', price: 1500, category: 'remera', img: `https://cdn.pixabay.com/photo/2017/01/13/04/56/t-shirt-1976334_1280.png`, stock: 13, description: 'Remera blanca mangas cortas' },
    { id: 2, name: 'Zapatillas Nike', price: 2000, category: 'zapatillas', img: 'https://cdn.pixabay.com/photo/2023/05/03/22/43/tennis-7968714_1280.png', stock: 5, description: 'Zapatiilas Nike' },
    { id: 3, name: 'Pantalon', price: 1800, category: 'pantalon', img: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=397&amp;q=80', stock: 15, description: 'Pantalon Jean' },
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
