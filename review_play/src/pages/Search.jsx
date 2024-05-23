import { useSearchParams } from "react-router-dom"
import { Link,useNavigate } from "react-router-dom"
import { BiSearchAlt2 } from 'react-icons/bi'
import { useState } from "react"
import GameCard from "../components/GameCard"
import { getGame } from "../functions/SearchGame"
import '../style/search.css'
import loading from '../assets/Loading.gif'

const Search = () => {
    const [searchParans] = useSearchParams()
    const query = searchParans.get("q")
    
    const metodo = `*, hypes,popularity,rating, cover.url;  where  name ~ *"${query}"* & platforms = (11,12,49,169,18,19,4,21,5,41,130,7,8,9,48,167,38,46,34,39) & category = (0,10) ; limit 32;sort rating desc;`
    let games = getGame(metodo,query)
    const [search, setSearch] = useState("")
    const navigate = useNavigate()
    const handleSubmit = (e) =>{
        e.preventDefault()

        if(!search) return
        
        navigate(`/search?q=${search}`)
        setSearch('')
    }
    


    return(
        <div>
        {games.length == 0 && 
            <div className="loading-container">
              <img src={loading} alt="Loading" className="loading-gif" />
            </div>
        }
        
        <div id='container_dad'>
            <form onSubmit={handleSubmit} id="input">
             <input id="input_search" type="text" placeholder={query} onChange={(e) => setSearch(e.target.value)} value = {search}/>
                <button type="submit" id="button_input">
                <BiSearchAlt2 id='icon'/>
                </button>
            </form>
            {games.length != 0 && 
            <div className="container">
            
            {games.map(game => (
                <GameCard key={game.id} gameID={game.id} />
            ))}
            </div>}
        </div>
        </div>
    )
}

export default Search