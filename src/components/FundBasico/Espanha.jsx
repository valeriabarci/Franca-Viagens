import React from 'react';
import EspanhaImg from '../img/espanha.jpg';
import './style.css';

export default function Espanha(){
    return (
        <div>
            <p id="voo">Número do Voo: 7415</p>
            <img src={EspanhaImg} alt="Espanha" />
            <h6> Saída e Chegada</h6>
            <p id="info"> GRU 15:40 ---○--- 08:55 SQV </p>
            <h5>São Paulo para</h5>
            <h2>Espanha</h2>
        </div>
    )
}