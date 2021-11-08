import React from 'react';
import AlemanhaImg from '../img/alemanha.jpg'; 
import './style.css'

export default function Alemanha(){

    return (
        <div className="informacao">
            <p id="voo">Número do Voo: 7792</p>
            <img src={AlemanhaImg} alt="Alemanha" />
            <h6> Saída e Chegada</h6>
            <p id="info"> GRU 20:30 ---○--- 07:30 FRA </p>
            <h5>São Paulo para</h5>
            <h2>Alemanha</h2>
        </div>
    )};