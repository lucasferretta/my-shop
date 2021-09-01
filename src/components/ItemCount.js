import { useState, useEffect } from "react";




export default function ItemCount({stock}){
    const initial = 0;
    const [count, setCount] = useState (parseInt(initial));
    const stockBase = (stock||0);
    const nuevoStockBase = stockBase-count || stockBase;

    

   
    

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

    const onAdd = () => {
        if(stock >= count){
            console.log(`Item agregado x ${count} unidades`)
            
        }
        else{
            console.log(`Sin stock`)

        }

        
    };

   

    useEffect(()=> {
   
        
    }, [])

    return(
        <>
            <div >

                
                    <div>
                        
                        <p>Stock: {nuevoStockBase}</p>
                        <button className="btn btn-danger" onClick={() => validarRestar(count)}>-</button>
                        <p id="contador">{count}</p>
                        <button className="btn btn-success" onClick={() => validarSumar(count,stockBase)}>+</button>
                        <br />
                        <br />
                        <button onClick={onAdd} className="btn btn-primary">Agregar al carrito</button>
                    </div>
            </div>
        </>
    )

    
}
