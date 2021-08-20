import React from 'react'




export default function Item (props) {
    return (

        <div className="card">

                
                    <div className="card-body">
                        <h3 className="card-title">{props.name}</h3>
                        <p className="card-text">stock: {props.stock}</p>
                       
                        
                    </div>
            </div>
        
        
    )
}
