import React from 'react';
import TailandiaImg from '../img/tailandia.jpg'; 
import './style.css';

export default function Tailandia(){
    return (
        <div>
            <p id="voo">Número do Voo: 8770</p>
            <img src={TailandiaImg} alt="Tailândia" />
            <h6> Saída e Chegada</h6>
            <p id="info"> GRU 03:50 ---○--- 22:05 HKT </p>
            <h5>São Paulo para</h5>
            <h2>Tailândia</h2>
        </div>
    )
}