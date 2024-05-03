
import { useParams } from "react-router-dom"
import { getGame } from '../functions/SearchGame'
import GameCard from "../components/GameCard"
import "../style/game.css"


const Game = () => {
    const {id} = useParams()

    const metodo = `*, cover.url; where id = ${id}`
    const games = getGame(metodo,id)


    return(
    <div className="conteiner"> 
    {games.length === 0 && <p>Carregando</p>}
    {games.map(game => (
        <div className="jogo">
         {game.cover && <img src={game.cover.url.replace('thumb', '1080p')} alt={`Capa de ${game.name}`} id="cover"/>}
            <h1 className="gameName">{game.name}</h1>
            {game.platforms.map((item, index) => <p>{game.platforms[index]}</p>)}
         <h2 className="textGame">{game.summary}</h2>
         <p className="textGame">{game.storyline}</p>
        <div className="similares">
            {game.similar_games.map((item, index) => <GameCard key={game.similar_games[index]} gameID={game.similar_games[index]}/>)}
        </div>

        </div>
        ))}
    </div>
    )
    
}

export default Game