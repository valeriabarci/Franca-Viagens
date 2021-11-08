import React from "react"
import './CartaoPartida.css'

const CartaoPartida = props => {
    let estilo = {
        backgroundColor: props.color || 'rgb(255, 254, 253)',
        borderColor: props.color || 'rgb(255, 254, 253)',
        borderRadius: props.radio || 10
    }
    return (
        <div className="CartaoPartida" style = {estilo}>
            <div className="ConteudoPartida">{props.children}</div>
        </div>
    )
}

export default CartaoPartida