import { useState } from "react";
import { Redirect } from "react-router-dom";


function ItemCount({stock, initial, action}) {

    const [cantidad, setCantidad] = useState(initial);
    const [confirmacion, setConfirmacion] = useState(false);


    const Incrementar = () => {
        if(cantidad < stock && stock > 0) {
            setCantidad(cantidad + 1);
        };
    };

    const Decrementar = () => {
        if(cantidad > 1) {
            setCantidad(cantidad - 1);
        };
    };

    


    return (
      <div>
        <div id="contador">
          <button onClick={Decrementar} className="btn btn-danger">-</button>
          <input name="cantidad" value={cantidad} />
          <button onClick={Incrementar} className="btn btn-success">+</button>
        </div>
        <button onClick={()=>{action(cantidad)}} className="btn btn-primary">Agregar al Carrito</button>
        {
          confirmacion && <Redirect to="/Cart" />
        }
      </div>
    );
  }

export default ItemCount;