import { useSearchParams } from "react-router-dom"
import GameCard from "../components/GameCard"
import { getGame } from "../functions/SearchGame"
const Search = () => {
    const [searchParans] = useSearchParams()
    const query = searchParans.get("q")

    const metodo = `*, cover.url; search "${query}"; limit 100; `
    const games = getGame(metodo,query)



    return(
        <div className="container">
            <h1>Resultados para: <span className="query-Text">{query}</span></h1>
            {games.length === 0 && <p>Carregando..</p>}
            {games.map(game => (
                <GameCard key={game.id} gameID={game.id} />
            ))}
 
        </div>
    )
}

export default Search