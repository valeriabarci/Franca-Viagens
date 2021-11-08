import React from 'react';
import MaldivasImg from '../img/maldivas.jpg'; 
import './style.css';

export default function Maldivas(){
    return (
        <div>
            <p id="voo">Número do Voo: 8955</p>
            <img src={MaldivasImg} alt="Maldivas" />
            <h6> Saída e Chegada</h6>
            <p id="info"> GRU 23:10 ---○--- 07:15 MLE </p>
            <h5>São Paulo para</h5>
            <h2>Maldivas</h2>
        </div>
    )
}