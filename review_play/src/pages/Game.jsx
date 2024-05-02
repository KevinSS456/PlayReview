
import { useParams } from "react-router-dom"
import { getGame } from '../functions/SearchGame'
import GameCard from "../components/GameCard"

const Game = () => {
    const {id} = useParams()

    const metodo = `*, cover.url; where id = ${id}`
    const games = getGame(metodo,id)


    return(
    <div className="class"> 
    {games.length === 0 && <p>Carregando</p>}
    {games.map(game => (
        <div>
         {game.cover && <img src={game.cover.url.replace('thumb', '1080p')} alt={`Capa de ${game.name}`} />}
         <h1>{game.name}</h1>
         <h2>{game.summary}</h2>
         <p>{game.storyline}</p>
         {game.similar_games.map((item, index) => <GameCard key={game.similar_games[index]} gameID={game.similar_games[index]}/>)}

        </div>
        ))}
    </div>
    )
    
}

export default Game