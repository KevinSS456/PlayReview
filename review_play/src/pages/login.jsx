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
            <FaApple  className="iconConnection" id="appleicon"/>
            <p>Sing in Aple</p>
        </button>
    </div>
    
    <div className="changes">
        <h2 className="textfrom">Forgot the password ? 
             <Link><span className="spanlogin"> Click here</span></Link></h2>
             <h2 className="textfrom">Or
             <Link to='../Cadastro'><span className="spanlogin"> Sing Up</span></Link></h2>
    </div>
        
    </div>
)}

export default Login