import React from 'react'
import {Link} from 'react-router-dom';
import ItemCount from './ItemCount'





export default function Item (props) {
    return (
        
        <div className="card">

                
                    <div className="card-body">
                    <img className= 'imgSize' src={props.imagen} className="card-img-top" alt="imagen" />
                    <h4 className="card-title">{props.name}</h4>
                    
                    <Link to={`/item/${props.id}`}> +Info </Link>
                        
                    
                        <ItemCount stock={props.stock} />
                        
                       
                        
                    </div>
            </div>
        
        
    )
}
