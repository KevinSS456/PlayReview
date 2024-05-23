import { Link } from 'react-router-dom'
import { FaStar} from 'react-icons/fa'
import { getGame } from '../functions/SearchGame';
import { getGener } from '../functions/SearchGeners';

const GameCard = ({gameID, showLink = true}) => {
    
    const metodo = `*, cover.url; where id = ${gameID}`
    const games = getGame(metodo)
    try{
    return(
        <div className='game-card'>

            {games.map(game => (
                
                <div className='game-card-items'>
                    {showLink && <Link to={`../game/${gameID}/${game.genres}/${game.game_modes}`}>
                    <h2>{game.name}  </h2>
                    <img src={game.cover.url.replace('thumb', '1080p')} alt={`Capa de ${game.name}`} />
                    </Link>}
                </div>
            ))}
            
        </div>
    )}catch {

    }}
export default GameCard