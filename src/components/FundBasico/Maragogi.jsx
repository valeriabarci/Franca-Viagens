import React from 'react';
import MaragogiImg from '../img/maragogi.jpg';
import './style.css';

export default function Maragogi(){
    return (
        <div>
            <p id="voo">Número do Voo: 3402</p>
            <img src={MaragogiImg} alt="Maragogi" />
            <h6> Saída e Chegada</h6>
            <p id="info"> GRU 17:55 ---○--- 00:25 MCZ </p>
            <h5>São Paulo para</h5>
            <h2>Maragogi</h2>
        </div>
    )
}