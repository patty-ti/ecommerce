import React from 'react';
import data from '/data';
import {BrownserRouter, Router, Link} from 'react-router-dom';
import './App.css';
import HomeScreen from './frontend/src/Screens/HomeScreen';
import ProductScreen from './frontend/src/Screens/ProductScreen';

function App() {

  const openMenu = () =>{
    document.querySelector(".sidebar").classList.add("open");
  }
  const Menu = () =>{
    document.querySelector(".sidebar").classList.remove("open");
  }
  return (
<BrowserRouter>
    <div className="grid-container">
      <header className="header">
        <div className="brand">
          <button onClick={openMenu}>
            &#9776;
          </button>
          <Link to="/">For Gamers</Link>            
        </div>
        <div className="header-links">        
          <a href="login-cadast.html">Login/Cadastrar</a>
          <a href="carrinho.html">Carrinho</a>
          <a href="redes-sociais">Contato</a>
        </div>
    </header>

    <aside className="sidebar">
        <h3>Categorias</h3>
        <button className="sidebar-close-button" onClick={Menu}>X</button>
        <ul>
          <li>
            <a href="index.html">Jogos</a>
          </li>

          <li>
            <a href="index.html">PC Gamer</a>
          </li>

          <li>
            <a href="index.html">Consoles</a>
          </li>

          <li>
            <a href="index.html">Acessórios</a>
          </li>
        </ul>


    </aside>
    <nav className="nav">
        <div className="totproducts">
        <a href="jogos.html">Jogos</a>
        <a href="consoles.html">Consoles</a>
        <a href="pcgamer.html">PC Gamer</a>
        <a href="acessorios.html">Acessórios</a>
        </div>
    </nav>

    <section className="section-one">


    </section>

    


    <main className="main">
      <div className="content">
        <Route path="/products/:id" component={ProductScreen} />
        <Route path="/" exact={true} component={HomeScreen} />
             
    </main>


    <section className="section-two">

    </section>

    <section className="section-three">
        <div className="About">
          <a href="about.html">Sobre</a>
        </div>
        <div className="redes-sociais">
          <a href="https://www.instagram.com/patty.rodriguess"><img src="assets/insta.png" alt="Instragram" width="60px" height="60px"></a>
          <a href="https://github.com/patty-ti"><img src="assets/git.png" alt="GitHub" width="60px" height="60px"></a>
          <a href="https://www.linkedin.com/in/patriciarodriguessilvaprs/"><img src="assets/linkedin.png" alt="LinkedIn" width="60px" height="60px"></a>
        </div>
    </section>
    
    <footer className="footer">
        <p> Todos os direitos reservados. </p>
        <p style='font-weight: bold'> &copy; Desenvolvido por Patty Rodrigues </p>
    </footer>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
