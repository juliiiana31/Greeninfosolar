import React from 'react';

import './App.css';

function App() {
  return (
    <div className="App">
      <section class="container" id="sedes">
        <h2> <strong> Integrantes PPI</strong></h2>
        <center>
          <table class="table">
          <thead>
            <tr>
              <th scope="col">Nombres</th>
              <th scope="col">Apellido</th>
              <th scope="col">Correo electronico</th>
              <th scope="col">Celular</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td >John Mario</td>
              <td>Rios Valencia</td>
              <td>johnygat63@gmail.com</td>
              <td>302 4395872</td>
            </tr>
            <tr>
              <td>Juliana</td>
              <td>Gomez Urrego</td>
              <td>juliiigomez3105@gmail.com</td>
              <td>3185584343</td>
            </tr>
            <tr>
              <td>Brayan Felipe</td>
              <td>Rodriguez Mosquera</td>
              <td>brayancreepy25@gmail.com</td>
              <td>3114225269</td>
            </tr>
            <tr>
              <td>Laura Danniela</td>
              <td>Zarate Guerrero</td>
              <td>lauzarate1227@gmail.com</td>
              <td>3183287502</td>
            </tr>
          </tbody>
        </table>
        </center>
      </section>
        <h1> CONSULTA </h1> 
        <h2> ¿Que es babel? </h2> 
        <p> Babel es un compilador que convierte un estándar nuevo en una versión totalmente compatible de
            JavaScript.Así, tenemos la ventaja de poder programar en un estándar nuevo sin renunciar a la compatibilidad entre navegadores.Es una herramienta que nos permite transformar nuestro código JS de última generación(o con funcionalidades
            extras) a JS que cualquier navegador o versión de node.js entienda. 
        </p>
        <h2> ¿Que es webpack? </h2> 
        <p> Webpack se define como un empaquetador de módulos(un bundler en la jerga habitual); es utilizado por miles de proyectos de
            desarrollo web Front - End : desde frameworks como React o Angular hasta en el desarrollo de aplicaciones tan conocidas como Twitter, Instagram, PayPal o la versión web de Whatsapp.Webpack es una herramienta de compilación(una build tool en
            la jerga) que coloca en un grafo de dependencias a todos los elementos que forman parte de tu proyecto de desarrollo: código JavaScript, HTML, CSS, plantillas, imágenes, fuentes...Esta idea central es la que lo convierte en una herramienta
            tan poderosa. 
        </p> 
    </div>
  );     

}

export default App;