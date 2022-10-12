import React from "react";

export default props =>
    <div>
        <h3>Dados Pessoais</h3>
        <h4>
            Nome: {props.nome} <br/>
            Sobrenome: {props.sobrenome} <br/>
            Curso: {props.curso} <br/>
        </h4>
    </div>