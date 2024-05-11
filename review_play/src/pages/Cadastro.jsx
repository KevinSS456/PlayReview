import React from "react"
import '../style/cadastro.css'
import { Link } from 'react-router-dom';

const Cadastro= () => {
    return(
    <div className="conteinerCadas">
        <div className="headerCadastro">
            <h1 className="loginTitle" id="cadastroTitle">BEM VINDO gAMErANK</h1>
    </div>
   
    <form action="" className="forms">
        <label htmlFor="Nome" className="textfrom">Nome:</label>
        <input type="text" className="input"/>
        <label htmlFor="email" className="textfrom">Email:</label>
        <input type="text" className="input"/>
        <label htmlFor="senha" className="textfrom" id="senha">Senha:</label>
        <input type="text" className="input"/>   
    </form>
   
    <div id="buttonsCadas">
        <button className="conectionbutton">
            <p>Cadastrar com Google</p>
        </button>
        <button className="conectionbutton">
            <p>Cadastrar com Facebook</p>
        </button>
        <button className="conectionbutton">
            <p>Cadastrar com Aple</p>
        </button>
    </div>
    
    <div className="changes">
             <Link to='Home'><button id="cadastrobutton" className="botaoLogin"><span id="buttonCadastroText">Cadastrar</span></button></Link>
    </div>
    </div>

)}

export default Cadastro