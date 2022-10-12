import React, { Component } from "react";


export default class Questao2 extends Component{
    
    state = { number: 0}

    somar = (x,y)=>{
        this.setState({number: x+y})
    }
    subtrair = (x,y)=>{
        this.setState({number: x-y})
    }
    multip = (x,y)=>{
        this.setState({number: x*y})
    }
    dividir = (x,y)=>{
        this.setState({number: x/y})
    }

    fazerOP = (op) =>{
        return () => {
            const x = parseFloat(document.getElementById('number1').value)
            const y = parseFloat(document.getElementById('number2').value)
            op(x,y)
        }
    }

    render(){
        return(
            <div>
                <div> 
                    <h1>Questão 2</h1>
                    <h3>Calculadora</h3>
                    <input type={'text'} id='number1' name="Number 1"/> <br></br>
                    <input type={'text'} id='number2' name="Number 2"/> <br/>
                    <button onClick={this.fazerOP(this.somar)}> + </button>
                    <button onClick={this.fazerOP(this.subtrair)}> - </button>
                    <button onClick={this.fazerOP(this.multip)}> * </button>
                    <button onClick={this.fazerOP(this.dividir)}> / </button>
                </div>
                    <h3>Resultado: {this.state.number}</h3>

            </div>
        )

    }
}
    