import React from 'react';
import { useEffect, useState } from 'react';

import Item from './Item';
import {productos} from './productsJson';



export default function ItemDetailContainer() {
            

        const [perfu, setPerfu] = useState([])

        useEffect (() => {

            new Promise ((resolve, reject) => {

                
                setTimeout(() => resolve (productos.filter(item => item.grupo === "Perfumeria")),2000)
            
            }).then((dataResolve) => setPerfu(dataResolve)
            
            )
            .catch((error) => {
                console.log('err', error)
            })
            
        }, [])

        return <Item {...perfu}/>

    }
