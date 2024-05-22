import React from "react"
import '../style/cadastro.css'
import { Link } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

const Cadastro= () => {
    return(
    <div className="conteinerCadas">
        <div className="headerCadastro">
            <h1 className="loginTitle" id="cadastroTitle">WELCOME TO  gAMErANK</h1>
    </div>
   
    <form action="" className="forms">
        <label htmlFor="Nome" className="textfrom">Name:</label>
        <input type="text" className="input"/>
        <label htmlFor="email" className="textfrom">Email:</label>
        <input type="text" className="input"/>
        <label htmlFor="senha" className="textfrom" id="senha">Password:</label>
        <input type="text" className="input"/>   
    </form>
   
    <div id="buttonsCadas">
        <button className="conectionbutton" id="connectionBCadastro">
            <FaGoogle className="iconConnection" />
            <p>Sing up Google</p>
        </button>
        <button className="conectionbutton" id="connectionBCadastro">
             <FaFacebook className="iconConnection"/>
            <p>Sing up Facebook</p>
        </button>
        <button className="conectionbutton" id="connectionBCadastro">
            <FaApple className="iconConnection"/>
            <p>Sing up Apple</p>
        </button>
    </div>
    
    <div className="changes">
    <Link to='../Escolha'><button id="cadastrobutton" className="botaoLogin"><span id="buttonCadastroText">Sing Up</span></button></Link>
    <h2 className="textfrom" >Are you registered already ?
             <Link to='../Login'><span id="spanlogin"> Click here</span></Link></h2>
             
    </div>
        
    </div>

)}

export default Cadastro