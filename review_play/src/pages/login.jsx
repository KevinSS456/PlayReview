import React from "react"
import '../style/login.css'
import { Link } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaApple } from "react-icons/fa";


const Login= () => {
    return (
    <div className="conteinerLogin">
        
        <div className="headerLogin">
            <h1 className="loginTitle">Bem vindo de volta</h1>
    </div>
   
    <form action="" className="forms">
        <label htmlFor="email" className="textfrom">Email:</label>
        <input type="text" className="input"/>
        <label htmlFor="senha" className="textfrom" id="senha">Senha:</label>
        <input type="text" className="input"/>
        <button  className="botaoLogin"><p>ENTRAR</p></button>    
    </form>
   
    <div className="buttonsLogin">
        <button className="conectionbutton">
            <FaGoogle className="iconConnection" />
            <p>Entrar com Google</p>
        </button>
        <button className="conectionbutton">
            <FaFacebook  className="iconConnection"/>
            <p>Entrar com Facebook</p>
        </button>
        <button className="conectionbutton">
            <FaApple  className="iconConnection"/>
            <p>Entrar com Aple</p>
        </button>
    </div>
    
    <div className="changes">
        <h2 className="textfrom">Esqueceu a Senha ? 
             <Link><span id="spanlogin"> Clique aqui</span></Link></h2>
             <Link to='../Cadastro'><button id="cadastrobutton" className="botaoLogin"><span id="buttonCadastroText">Cadastro</span></button></Link>
    </div>
        
    </div>
)}

export default Login