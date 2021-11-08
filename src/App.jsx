import React from "react";
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Cartao from "./layout/Cartao";
import Header from './components/Header/Header';
import Alemanha from './components/FundBasico/Alemanha';
import Amsterda from "./components/FundBasico/Amsterda";
import Canada from './components/FundBasico/Canada';
import Espanha from './components/FundBasico/Espanha';
import Gramado from './components/FundBasico/Gramado';
import Maldivas from './components/FundBasico/Maldivas';
import Maragogi from './components/FundBasico/Maragogi';
import Paris from './components/FundBasico/Paris';
import Sydney from './components/FundBasico/Sydney';
import Tailandia from './components/FundBasico/Tailandia';
import CartaoPartida from './layout/CartaoPartida';
import Voosair from './components/FundBasico/VooSair';
import Footer from './components/Footer/Footer';
import AssentosVagos from './components/FundBasico/AssentosVagos';

const App = () => {
    return (
        <BrowserRouter>
        <div className="App">
            <Header />
            <div className="Cartoes">
                
                <CartaoPartida titulo="Voos em partida">
                    <Voosair />
                </CartaoPartida>

                <Cartao titulo="Voo para Alemanha"
                    color = '#31A366'>
                    <Alemanha />
                    <AssentosVagos />
                </Cartao>

                <Cartao titulo="Voo para Amsterdã"
                    color = '#31A366'>
                    <Amsterda />
                    <AssentosVagos />
                </Cartao>

                <Cartao titulo="Voo para Canadá"
                    color = '#403DFF'>
                    <Canada />
                    <AssentosVagos />
                </Cartao>

                <Cartao titulo="Voo para Espanha"
                    color = '#31A366'>
                    <Espanha />
                    <AssentosVagos />
                </Cartao>

                <Cartao titulo="Voo para Gramado"
                    color = '#403DFF'>
                    <Gramado />
                    <AssentosVagos />
                </Cartao>

                <Cartao titulo="Voo para Maldivas"
                    color = '#E80270'>
                    <Maldivas />
                    <AssentosVagos />
                </Cartao>

                <Cartao titulo="Voo para Maragogi"
                    color = '#403DFF'>
                    <Maragogi />
                    <AssentosVagos />
                </Cartao>

                <Cartao titulo="Voo para Paris"
                    color = '#31A366'>
                    <Paris />
                    <AssentosVagos />
                </Cartao>

                <Cartao titulo="Voo para Sydney"
                    color = '#FF8B05'>
                    <Sydney />
                    <AssentosVagos />
                </Cartao>

                <Cartao titulo="Voo para Tailândia"
                    color = '#E80270'>
                    <Tailandia />
                    <AssentosVagos />
                </Cartao>
                <Footer />
                
            </div>
        </div>
    </BrowserRouter>
    )
}

export default App