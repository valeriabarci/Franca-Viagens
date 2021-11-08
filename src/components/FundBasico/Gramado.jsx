import React from 'react';
import GramadoImg from '../img/gramado.jpg';
import './style.css';

export default function Gramado(){
    return (
        <div>
            <p id="voo">Número do Voo: 1203</p>
            <img src={GramadoImg} alt="Gramado" />
            <h6> Saída e Chegada</h6>
            <p id="info"> RAO 15:30 ---○--- 23:10 POA </p>
            <h5>Ribeirão Preto para</h5>
            <h2>Gramado</h2>
        </div>
    )
}