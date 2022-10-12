import React from 'react';
import './App.css';
import Questao1 from './prova01/Q1/Questao1';
import Questao01A from './prova01/Q1/Questao01A';
import Questao2 from './prova01/Q2/Questao2';
import Questao3 from './prova01/Q3/Questao3';
import Questao4 from './prova01/Q4/Questao4';
function App() {
  return (
    <div className="App" style = {{width: '50%', marginLeft: 'auto', marginRight: 'auto'}}>
      <h1>Prova 1</h1>
        <Questao1>
          <Questao01A 
            nome= 'Walesson' 
            sobrenome = 'Samuel' 
            curso = 'Engenharia de Software'/>
        </Questao1> <br/>

        <Questao2/> <br/>

        <Questao3/> <br/>

        <Questao4/>
      </div>
  );
}

export default App;
