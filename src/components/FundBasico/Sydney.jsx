import React from 'react';
import SydneyImg from '../img/sydney.jpg';
import './style.css';

export default function Sydney(){
    return (
        <div>
            <p id="voo">Número do Voo: 7942</p>
            <img src={SydneyImg} alt="Sydney" />
            <h6> Saída e Chegada</h6>
            <p id="info"> GRU 22:50 ---○--- 07:30 SYD </p>
            <h5>São Paulo para</h5>
            <h2>Sydney</h2>
        </div>
    )
}