import React from 'react'
import FotoCV from './assets/FotoCV.jpeg'

const products = [
    { id: 1, name: 'Remera', price: 1500, category: 'Remera', img: `https://cdn.pixabay.com/photo/2017/01/13/04/56/t-shirt-1976334_1280.png`, stock: 13, description: '' },
    { id: 2, name: 'Zapatillas Nike', price: 2000, category: 'Zapatillas', img: 'https://cdn.pixabay.com/photo/2023/05/03/22/43/tennis-7968714_1280.png', stock: 5, description: '' },
    { id: 3, name: 'Producto 3', price: 1000, category: 'Remera', img: '', stock: 15, description: '' },
]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() =>{
            resolve(products)
        }, 2000)
    })
}