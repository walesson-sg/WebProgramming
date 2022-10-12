import React, { Component } from "react";
import axios from 'axios';

export default class Questao4 extends Component{
    state = {africa: [], ver: [], ver2: []}
    url = "https://restcountries.com/v2/region/africa?fields=name,population"
    paisMP
    xis
    
    componentDidMount(){
        this.getPaises()();
    }
    getPaises(){
        return () => axios.get(this.url).then((resposta)=>{
            this.setState({...this.state, africa: resposta.data})
        })
    }

    printPaises(){
        return this.state.africa.map(p=><h5 style={{textAlign: "mid"}}> {p.name} - {p.population}</h5>)
    }
    printp(){
        this.state.ver = this.state.africa.map(p=>p.population)
        this.state.ver2 = this.state.africa.map(p=>p.name)
        let a1 = 0;
        let a2;
        for(let i = 0; i < this.state.ver.length; i++){
            if( a1 < this.state.ver[i]){
                a1 = this.state.ver[i];
                a2 = this.state.ver2[i];
            }
        }
        return <h4>"{a1} - {a2}"</h4>
    }


    render() {
        return (
        <div>
            <h1>Questão 4</h1>
            {this.printp}
            <h3>Lista de Paises da Africa</h3>
            <h3>País mais populoso: {this.printp()}</h3>
            <h3>Demais Paises da Africa:</h3>
            {this.printPaises()}

        </div>
        )
    }
}