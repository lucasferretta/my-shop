import React from 'react'
import Item from './Item';



export default function Farmacia() {
    return(
        <div>
            {Item.map(()=> Item.filter(Farmacia))}
        </div>
    )

        
    }