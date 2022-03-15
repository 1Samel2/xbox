import React from 'react';

import './index.css';

import LogoXbox from './assets/logo-xbox.svg'

import XboxLogo from './assets/xbox.svg'

import Sombra from './assets/luz-verde.svg'

function App() {

  return (

    <div className="container">

      <section className="seçao" >
        <img src={LogoXbox} alt="logo-xbox" />
        <ul>
          <li>visão geral</li>
          <li>jogos</li>
          <li>galeria</li>
          <li>unbox</li>
        </ul>
        <button type="button">ver disponibilidade</button>
      </section>

      <div className="logoManete">
      
      <h1>Xbox series X</h1>
      <p>pedido antecipado</p>
      <img   src='' alt="logo"/>
      <img  className="GmgPrincipal" src= {XboxLogo} alt="logo"/>

      </div>





    </div>

  );
}

export default App;
