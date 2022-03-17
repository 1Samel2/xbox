import React from 'react';

import './index.css';

import LogoXbox from './assets/logo-xbox.svg'

import XboxLogo from './assets/xbox.svg'

import Controle from './assets/controle.svg'

function App() {

  return (

    <div className="container">


      <aside className="seçao" >

        <img src={LogoXbox} alt="logo-xbox" />

        <ul>
          <li>visão geral</li>
          <li>jogos</li>
          <li>galeria</li>
          <li>unbox</li>
        </ul>

        <button type="button">ver disponibilidade</button>

      </aside>

      <header>

        <div className="console">
          <h1>Xbox series X</h1>
          <h2>pedido antecipado</h2>
          <div className="sombra"></div>
          <img className="imgPrincipal" src={XboxLogo} alt="logo-xbox" />
        </div>

        <div className="testeDeTexto">
          <h3>Desempenho aperfeiçoado</h3>
          <p>O controle sem fio Xbox traz um design elegante,  conforto refinado e compartilhamento instantâneo para um favorito comum.</p>

          <img className= "alinhamentoDeImg"   src={Controle} alt="logo-xbox" />

        </div>

      </header>


      {/* <div className="Card">  */}









    </div>

  );
}

export default App;
