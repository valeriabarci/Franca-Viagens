import React from 'react';
import ParisImg from '../img/paris.jpeg'; 
import './style.css';

export default function Paris(){
    return (
        <div>
            <p id="voo">Número do Voo: 8680</p>
            <img src={ParisImg} alt="Paris" />
            <h6> Saída e Chegada</h6>
            <p id="info"> GRU 20:00 ---○--- 17:50 CDG </p>
            <h5>São Paulo para</h5>
            <h2>Paris</h2>
        </div>
    )
}