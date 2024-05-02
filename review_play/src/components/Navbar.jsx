import { Link,useNavigate } from "react-router-dom"
import { BiSearchAlt2 } from 'react-icons/bi'
import { useState } from "react"

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
            <h1>PlayReview</h1>
            <h2>
            <Link to="/">Home</Link>
            </h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Digite um jogo" onChange={(e) => setSearch(e.target.value)} value = {search}/>
                <button type="submit">
                <BiSearchAlt2 />
                </button>
            </form>
        </nav>
    )
}

export default Navbar