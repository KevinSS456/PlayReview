import { Link } from "react-router-dom"
import { BiSearchAlt2 } from 'react-icons/bi'

const Navbar = () => {
    return (
        <nav id="navbar">
            <h1>PlayReview</h1>
            <h2>
            <Link to="/">Home</Link>
            <Link to="/game/1">Game</Link>
            <Link to="/search">Search</Link>
            </h2>
            <form>
                <input type="text" placeholder="Digite um jogo" />
                <button type="submit">
                <BiSearchAlt2 />
                </button>
            </form>
        </nav>
    )
}

export default Navbar