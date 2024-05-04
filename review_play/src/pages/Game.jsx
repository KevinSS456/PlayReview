
import { useParams } from "react-router-dom"
import { getGame } from '../functions/SearchGame'
import GameCard from "../components/GameCard"
import "../style/game.css"


const Game = () => {
    const {id} = useParams()

    const metodo = `*, cover.url; where id = ${id}`
    const metodo_screns = `*; where game = ${id};`
    
    const link = 'https://api.igdb.com/v4/screenshots'
    const link_video = 'https://api.igdb.com/v4/game_videos'
    const games = getGame(metodo,id)
    const screens = getGame(metodo_screns,id,link)
    const video = getGame(metodo_screns,id,link_video)


    return(
    <div className="conteiner"> 
    {games.length === 0 && <p>Carregando</p>}
    {games.map(game => (
        <div className="jogo">
         {game.cover && <img src={game.cover.url.replace('thumb', '1080p')} alt={`Capa de ${game.name}`} id="cover"/>}
            <h1 className="gameName">{game.name}</h1>
         <h2 className="textGame">{game.summary}</h2>
         <p className="textGame">{game.storyline}</p>
         <div className="screenshots">
         
            {screens.map(foto =>(<img src={foto.url.replace('thumb', '1080p')} alt={`Capa de ${game.name}`} id="screen"/>))}
            {video.map(urlvideo =>(<iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${urlvideo.video_id}`}
            title="Video Player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
      >     </iframe>))[0]}
            
         </div>
        <div className="similares">
            {game.similar_games.map((item, index) => <GameCard key={game.similar_games[index]} gameID={game.similar_games[index]}/>)}
        </div>


        </div>
        ))}
    </div>
    )
    
}

export default Game