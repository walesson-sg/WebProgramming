import React from "react";

const disciplinas = ['Web', 'Desenvolvimento Mobile', 'Gerência de Configuração', 'Processos de Software']

function dis(disciplinas){
    return disciplinas.map(d => <li> {d} </li>)
}

export default Questao01B=>
    <div style={{width: '50%', marginLeft: 'auto', marginRight: 'auto'}}>   
        <h3>Disciplinas</h3>
        <ul style={{textAlign: "left"}}>{dis(disciplinas)}</ul>

    </div>