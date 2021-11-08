import React from 'react';
import CanadaImg from '../img/canada.jpg';
import './style.css';


export default function Canada(){
    return (
        <div>
            <p id="voo">Número do Voo: 7939</p>
            <img src={CanadaImg} alt="Canada" />
            <h6> Saída e Chegada</h6>
            <p id="info"> GRU 09:55 ---○--- 21:45 YUL </p>
            <h5>São Paulo para</h5>
            <h2>Canadá</h2>
        </div>
    )
}