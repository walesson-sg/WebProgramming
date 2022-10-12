import React, { Component } from "react";
import axios from 'axios';

export default class Questao3 extends Component{
    state = {pokemons: [], pag: 0, end: false}
    url = "https://pokeapi.co/api/v2/pokemon?limit=10&offset="
    limit = 10
    
    componentDidMount(){
        this.getPokemons()();
    }
    proxPag(){
        return () =>{
            if(!this.state.end){
                this.state.pag++;
                this.getPokemons()();
            }

        }
    }
    pagAnt(){
        return () =>{
            if(this.state.pag > 0){
                this.state.pag--;
                this.getPokemons()();
            }
        }
    }

    getPokemons(){
        return () => axios.get(this.url+(this.state.pag*this.limit)).then((resposta)=>{
            this.state.end = !resposta.data.next;
            this.setState({...this.state, pokemons: resposta.data.results})
        })
    }
    printPoke(){
        return this.state.pokemons.map(p=><h4> {p.name} - {p.url}</h4>)
    }


    render() {
        return (
        <div>
            <h1>Questão 3</h1>
            <h3>Lista de Pokemons</h3>
            {this.printPoke()}
            <button onClick={this.pagAnt()}>Anterior</button>
            <button onClick={this.proxPag()}>Próxima</button>
        </div>
        )
    }
}