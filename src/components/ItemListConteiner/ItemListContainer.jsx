import React from "react";
import { useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
import { useParams } from "react-router-dom";

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
     

    if (loading === true) return <p className="loading">Cargando...</p>
    
    
    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products = {products} />
        </div>
    )
}

export default ItemListContainer