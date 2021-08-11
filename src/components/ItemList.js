import React, { useEffect, useState } from 'react';
import Item from './Item';

export default function ItemList() {

        const [products, setProducts] = useState([])
        useEffect (() => {

            new Promise ((resolve, reject) => {

                const data = [
                    {
                        id: '1',
                        name:'Tafirol 500 mg x 30 comp',
                        descripcion: 'Analgesico',
                        stock: 4
                    },
                    {
                        id: '2',
                        name:'Actron 400 mg x 20 caps ',
                        descripcion: 'Analgesico',
                        stock: 6
                    }
                ]
                setTimeout(() => resolve (data),3000)

            }).then((dataResolve) => {
                console.log('data Resolve', dataResolve)
                setProducts(dataResolve)
            })
            .catch((error) => {
                console.log('err', error)
            })
            
        }, [])

        return(
            <div> 
                {products.map((cadaProducto) => (
                    <Item {...cadaProducto} />
                ))}
            </div>
        )
    }

