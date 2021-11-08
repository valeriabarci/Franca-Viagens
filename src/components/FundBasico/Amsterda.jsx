import React from 'react';
import AmsterdaImg from '../img/amsterda.jpg'; 
import './style.css';


export default function Amsterda(){
    return (
        <div>
            <p id="voo">Número do Voo: 8527</p>
            <img src={AmsterdaImg} alt="Amsterdã" />
            <h6> Saída e Chegada</h6>
            <p id="info"> GRU 20:30 ---○--- 07:15 AMS </p>
            <h5>São Paulo para</h5>
            <h2>Amsterdã</h2>
        </div>
    )
}