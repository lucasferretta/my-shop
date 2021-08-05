import React, { Component } from 'react'
import carritoLogo from '../img/carrito.png'


export default class CartWidget extends Component {
    render() {
        return (
            <div>
                <img id="carritoImg" src={carritoLogo}></img>
            </div>
        )
    }
}





