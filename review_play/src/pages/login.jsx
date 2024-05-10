import React from "react"
import '../style/login.css'

const Login= () => {
    return (
    <div className="conteiner">
    <h1 className="loginTitle">Bem vindo de volta</h1>
    
    <form action="" className="forms">
        <label htmlFor="email" className="textform">Email:</label>
        <input type="text" className="input"/>
        <label htmlFor="senha" className="textfrom">Senha:</label>
        <input type="text" className="input"/>
        
    </form>
    </div>
)}

export default Login