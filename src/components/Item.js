import React from 'react'



export default function Item(props) {
    return (
        <div>
            {props.name}
            {props.stock}
            {props.descripcion}
        </div>    
        
    )
}
