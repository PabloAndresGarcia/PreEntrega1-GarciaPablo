import React from "react";
import { useState, useEffect } from "react";
import ItemList from '../ItemList/ItemList'
import { useParams } from "react-router-dom";
import { InfinitySpin } from 'react-loader-spinner'

import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../service/firebase/firebaseConfig";



const ItemListContainer = ({  }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true);

    const { categoryId } = useParams()

        useEffect(() =>{
           setLoading(true)
           
            const collectionRef = categoryId
                ? query(collection(db, 'Productos'), where('category', '==', categoryId))
                : collection(db, 'Productos')

            getDocs(collectionRef)
                .then(response => {
                    const productsAdapted = response.docs.map(doc=> {
                        const data = doc.data()
                        return { id: doc.id, ...data }
                    })
                    setProducts(productsAdapted)
                })
                .catch(error=> {
                    console.log(error)
                })
                .finally(()=>{
                    setLoading(false)
                })
    }, [categoryId])
     

    if (loading === true) return <h1 className='flex items-center justify-center pt-10'>
        <InfinitySpin
            width='200'
            color="#EE6C4D"
            />
            </h1>
    return (
        <div className='m-10 flex items-center justify-center'>           
            <ItemList products = {products} />
        </div>
    )
}

export default ItemListContainer