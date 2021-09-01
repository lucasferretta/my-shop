import React from 'react';
import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import ItemDetail from './ItemDetail';
import {productos} from './productsJson';



export default function ItemDetailContainer() {
            

        const [detail, setDetail] = useState([])

        const {id} = useParams();

        useEffect (() => {

            new Promise ((resolve, reject) => {

                
                setTimeout(() => resolve (productos.filter(item => item.id === id)),2000)

            }).then((dataResolve) => setDetail(dataResolve[0])
            )
            .catch((error) => {
                console.log('err', error)
            })
            
        }, [])

        return <ItemDetail {...detail}/>
               
        
        

        
    


}