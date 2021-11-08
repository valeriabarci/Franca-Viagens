import React, { Component } from 'react';
import AviaoImg from '../img/aviao.gif';
import AviaoReverseImg from '../img/aviao_reverse.gif';

class Lugares extends Component {
    constructor(){
        super();
        this.state = {
            lugar: ''
        };
    }
    lugarArray = ['Tailândia', 'Canadá', 'Gramado', 'Espanha', 'Maragogi', 'Paris', 'Alemanha', 'Amsterdã', 'Sydney', 'Maldivas']

    componentDidMount() {
        setInterval (() => {
            this.setState({lugar:this.lugarArray[Math.floor(Math.random() * this.lugarArray.length)]});
        }, 7500);
    }

    render() {
        return (
            <div>
                <img src={AviaoReverseImg} alt="Avião" />
                <h4> Embarque: </h4>
                <h1>{this.state.lugar}</h1>
                <img src={AviaoImg} alt="Avião" />

                
            </div>
        )
    }
}
export default Lugares;