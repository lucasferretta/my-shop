import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';



export default function ItemDetailContainer() {

        const [detail, setDetail] = useState([])
        useEffect (() => {

            new Promise ((resolve, reject) => {

                const getItems = [
                    {
                        accion: 'Analgésico',
                        imagen: 'https://cdn.batitienda.com/baticloud/images/product_image_from_excel_35ec8cbdf4544e0fb392c681b99c3ada_637511585142276595_0_l.png',
                        precio: '$300',
                        
                    },
                    {
                        accion: 'Analgésico',
                        imagen:'https://farmadelmilagro.com.ar/tienda/1614-large_default/actron-600-x-20-caps.jpg',
                        precio: '$260',
                    
                    }
                ]
                setTimeout(() => resolve (getItems),2000)

            }).then((dataResolve) => {
                console.log('data Resolve', dataResolve)
                setDetail(dataResolve)
            })
            .catch((error) => {
                console.log('err', error)
            })
            
        }, [])

        return(
            <div> 
                {detail.map((detalleProducto) => (
                    <ItemDetail {...detalleProducto} />
                ))}
                
            </div>
        )
    }