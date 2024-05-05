import { Link,useNavigate } from "react-router-dom"
import { BiSearchAlt2 } from 'react-icons/bi'
import { useState } from "react"
import Logo from '../assets/Logo.png'
import userIcon from '../assets/userIcon.png'

import "../style/Navbar.css"

const Navbar = () => {
    const [search, setSearch] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefault()
        
        if(!search) return
        
        navigate(`/search?q=${search}`)
        setSearch('')
    }


    return (
        <nav id="navbar">
            <Link to='/'>
                <div id="logo_container">
                <img src={Logo} alt="sim" id="imagemLogo"/>
                <p id="logoText">gAMErANK</p>
                </div>
            </Link>
            <div id="links_container">
                 <h2 className="links">
                    <Link to="/">Home</Link>
                </h2>
                <h2 className="links">
                    <Link to="/">Lançamentos</Link>
                </h2>
                <h2 className="links">
                    <Link to="/">Listas</Link>
                </h2>
            </div>
            <div id="submit_container">
            <form onSubmit={handleSubmit} id="form">
                <input id="Search"type="text" placeholder="" onChange={(e) => setSearch(e.target.value)} value = {search}/>
                <button type="submit" id="button_search">
                <BiSearchAlt2 id='icon'/>
                </button>
            </form>
            <Link to='/'><img src={userIcon} alt="sim" id="userIcon"/></Link>
            </div>

        </nav>
    )
}

export default Navbar