import React from "react";
import { useState } from "react";
import './style.css';

export default function Ocupacao() {

    const [reduce, setCount] = useState(10);

    const sum = () => { setCount(reduce + 1) };
    const deduct = () => { setCount(reduce - 1) };
    return (
        <div>
            <p class="text">
                {reduce > 0 ? 
                    (<div>
                        Lugares disponíveis: {reduce}
                    </div>):
                    (<div id="alert"> Não há mais assentos disponíveis! </div>)
                }
                <div class="form">
                        <ul class="buttons">
                        <br />
                            <li><button onClick={deduct} id= "reservation">Reservar</button></li>
                            <li><button onClick={sum} id="cancel">Cancelar</button></li>
                        </ul>
                    </div>
            </p>
        </div>
    )
}