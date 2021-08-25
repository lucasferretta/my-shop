import React from 'react'
import {Link} from 'react-router-dom';
import ItemCount from './ItemCount';

export default function ItemDetail(props) {
    return(
        <div>
            
            <div className="card">

                
                    <div className="card-body">
                    <img className= 'imgSize' src={props.imagen} className="card-img-top" alt="imagen" />
                    <h4 className="card-title">{props.name}</h4>
                    <h3 className="card-title">{props.precio}</h3>
                    <p className="card-text">{props.accion}</p>
                    <Link to={`/`}> -Info </Link>
                        
                    
                        <ItemCount stock={props.stock} />
                        
                       
                        
                    </div>
            </div>
            
        </div>
    )

        
    }