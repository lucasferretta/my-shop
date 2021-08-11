import { useState, useEffect } from "react";


export default function ItemCount({stock, producto,imgProd,descripcion}){
    const initial = 0;
    const [count, setCount] = useState (parseInt(initial));
    const stockBase = stock||0;
    const nombreProducto = producto;
    const imgProducto = imgProd;
    const infoProducto = descripcion;
    

    const validarSumar = (cantidad=0, cantidadDisponible=0) => {
        if (cantidad < cantidadDisponible){
            setCount(count+1)
        }
    };

    const validarRestar = (cantidad=0) => {
        if (cantidad > 0){
        setCount(count-1);
        }
    }

   

    useEffect(()=> {
        
        
    }, [])

    return(
        <>
            <div className="card">

                <img src={imgProducto} className="card-img-top" alt="imagen" />
                    <div className="card-body">
                        <h5 className="card-title">{nombreProducto}</h5>
                        <p className="card-text">{infoProducto}</p>
                        <p className="card-text">Stock: {stockBase}</p>
                        <button className="btn btn-danger" onClick={() => validarRestar(count)}>-</button>
                        <p id="contador">{count}</p>
                        <button className="btn btn-success" onClick={() => validarSumar(count,stockBase)}>+</button>
                        <br />
                        <br />
                        <button className="btn btn-primary">Agregar al carrito</button>
                    </div>
            </div>
        </>
    )

    
}
