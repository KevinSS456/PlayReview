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
            <h1 className="loginTitle">welcome Back</h1>
    </div>
   
    <form action="" className="forms">
        <label htmlFor="email" className="textfrom">Email:</label>
        <input type="text" className="input"/>
        <label htmlFor="senha" className="textfrom" id="senha">Password:</label>
        <input type="text" className="input"/>
        <button  className="botaoLogin"><p>Sing In</p></button>    
    </form>
   
    <div className="buttonsLogin">
        <button className="conectionbutton">
            <FaGoogle className="iconConnection" />
            <p>Sing in Google</p>
        </button>
        <button className="conectionbutton">
            <FaFacebook  className="iconConnection"/>
            <p>Sing in Facebook</p>
        </button>
        <button className="conectionbutton">
            <FaApple  className="iconConnection"/>
            <p>Sing in Aple</p>
        </button>
    </div>
    
    <div className="changes">
        <h2 className="textfrom">Forgot the password ? 
             <Link><span id="spanlogin"> Click here</span></Link></h2>
             <Link to='../Cadastro'><button id="cadastrobutton" className="botaoLogin"><span id="buttonCadastroText">Sing Up</span></button></Link>
    </div>
        
    </div>
)}

export default Login