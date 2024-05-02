import { Link } from 'react-router-dom'
import { FaStar} from 'react-icons/fa'
import { getGame } from '../functions/SearchGame';

const GameCard = ({gameID, showLink = true}) => {
    
    const metodo = `*, cover.url; where id = ${gameID}`
    const games = getGame(metodo)
    try{
    return(
        <div className='game-card'>

            {games.map(game => (
                
                <div>
                    {showLink && <Link to={`../game/${gameID}`}>
                    <img src={game.cover.url.replace('thumb', '1080p')} alt={`Capa de ${game.name}`} />
                    <h2>{game.name}  </h2>
                    <p><FaStar />{game.rating}</p>
                    </Link>}
                </div>
            ))}
            
        </div>
    )}catch {

    }}
export default GameCard