import React from 'react'



export default function ItemDetail (props) {
    return (
        <div className="card">

            <img className= 'imgSize' src={props.imagen} className="card-img-top" alt="imagen" />
                <div className="card-body">
                    <h5 className="card-title">{props.precio}</h5>
                    <p className="card-text">{props.accion}</p>
                </div>
        </div>    
        
    )
}