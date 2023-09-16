import React from "react";
import { useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from "react-router-dom";
import { InfinitySpin } from 'react-loader-spinner'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true);

    const {categoryId} = useParams()

        useEffect(() =>{
            const asyncFunc = categoryId ? getProductsByCategory : getProducts

            asyncFunc(categoryId)
            .then(res =>{
                setProducts(res)
                setLoading(false)
            })
            .catch(error => {
                console.error(error)
            })
    }, [categoryId])
     

    if (loading === true) return <h1 className='items-center w-full justify-center'>
        <InfinitySpin             
            width='200'
            color="#EE6C4D"
            />
            </h1>
    
    
    
    return (
        <div className='m-10 flex'>
            <h1>{greeting}</h1>
            <ItemList products = {products} />
        </div>
    )
}

export default ItemListContainer