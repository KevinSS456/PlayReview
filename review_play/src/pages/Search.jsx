import { useSearchParams } from "react-router-dom"
import { Link,useNavigate } from "react-router-dom"
import { BiSearchAlt2 } from 'react-icons/bi'
import { useState } from "react"
import GameCard from "../components/GameCard"
import { getGame } from "../functions/SearchGame"
import '../style/search.css'
const Search = () => {
    const [searchParans] = useSearchParams()
    const query = searchParans.get("q")

    const metodo = `*, hypes, cover.url; where name ~ *"${query}"*; limit 60;sort hypes desc`
    const games = getGame(metodo,query)
    const [search, setSearch] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefault()
        
        if(!search) return
        
        navigate(`/search?q=${search}`)
        setSearch('')
    }
    


    return(
        <div id='container_dad'>
            <form onSubmit={handleSubmit} id="input">
                {<input id="input_search" type="text" placeholder={query} onChange={(e) => setSearch(e.target.value)} value = {search}/>}
                <button type="submit" id="button_input">
                <BiSearchAlt2 id='icon'/>
                </button>
            </form>
            <div className="container">
            {games.length === 0 && <p>Carregando..</p>}
            {games.map(game => (
                <GameCard key={game.id} gameID={game.id} />
            ))}
            </div>
        </div>
    )
}

export default Search