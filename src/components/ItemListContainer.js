import React from 'react'
import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import ItemList from './ItemList'
import {productos} from './productsJson';


export default function ItemListContainer() {
    
        const [products, setProducts] = useState([])
        const {menuCards} = useParams();
        useEffect (() => {

            new Promise ((resolve, reject) => {

            setTimeout(() => resolve (productos),3000)

            }).then((dataResolve) => {
                console.log('data Resolve', dataResolve)
                setProducts(dataResolve)
            })
            .catch((error) => {
                console.log('err', error)
            })
            
        }, [])

        return <ItemList products={products}/>
    
}
