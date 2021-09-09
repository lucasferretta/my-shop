import React from 'react'
import { useState, useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import {Link} from 'react-router-dom';
    
    function Cart() {
    
        const [data, setData] = useContext(CartContext);
        const [montoTotal, setMontoTotal] = useState(0)
    
        const clearCart = () => {
            
            setData({
                cantidad: 0,
                items: []
            })
            console.log(`Se ha eliminado todos los productos del carrito`)
        }
    
        const removeItem = (itemDelete) => {
            console.log(itemDelete)
            const itemEliminar = data.items.find(producto => producto.id === itemDelete);
            const datosFiltadros = data.items.filter((producto) => producto.id !== itemDelete)
    
    
            setData({
                ...data,
                cantidad: data.cantidad - itemEliminar.qty,
                items: [...datosFiltadros]
            })
        }
    
        const calcularTotal = () => {
            if (data.items.length === 0) return null
            const arrayPrecio = data.items.map(item => item.qty * item.precio )
    
            let resultado = arrayPrecio.reduce((acu, currentvalue) => acu + currentvalue)
            setMontoTotal(resultado) 
    
        }
    
        useEffect(() => {
            calcularTotal()
        }, [montoTotal])
    
        return (
            <div>
                <h2>Carrito de compras</h2>
                { !!data.cantidad && <h3>Cantidad de items {data.cantidad}</h3>}
                {
                    data.items.length > 0 ?
                    data.items.map(item => 
                        (
                        <div>
    
                            <div>
                                
                                <h4>{item.name}</h4>
                                <span>{item.qty} x  $ {item.precio} </span>
                                <button className="btn btn-danger" onClick={() => removeItem(item.id)}>X</button>
                            </div>
    
                        </div>
                        )
                    )
                    :
                    <div>
                        <h4>No se han agregado productos</h4>
                        <Link to={`/`}><button className="btn btn-success">Volver al menú de compras</button></Link>
                        <div>
                            
                        </div>
                    </div>
                }
    
                { !!data.cantidad && (
                    <>
                    <h3>Monto Total:  {montoTotal}</h3>
                    <div className="ItemCartFooter">
                        <button className="btn btn-danger" onClick={() => clearCart()}>Vaciar Carrito</button>
                        <button className="btn btn-success">Procesar Compra</button>
                        <Link to={`/`}><button className="btn btn-primary">Seguir comprando</button></Link>

                    </div>
                    </>
                )}
            </div>
        );
    };

export default Cart;
