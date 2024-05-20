
import { useParams } from "react-router-dom"
import { useState,useEffect } from 'react';
import { getGame } from '../functions/SearchGame'
import { getGener } from "../functions/SearchGeners"
import GameCard from "../components/GameCard"
import "../style/game.css"
import { FaStar} from 'react-icons/fa'
import arrow from '../assets/arrow.png'


const Game = () => {
    const {id, gener } = useParams()
    const [i, setContador] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const [isVisible_left, setIsVisible_left] = useState(false);

    function nextGame(){

        if (i === 5) {
          setIsVisible(false);
        } else {
          setContador(i + 1);
          setIsVisible_left(true)
        }
        
      }
      function prevtGame(){
    
        if (i === 0) {
          setIsVisible_left(false)
        } else {
          setContador(i - 1);
          setIsVisible(true);
        }
        }
        

        console.log(gener)

        const metodo = `*, cover.url; where id = ${id}`
        const metodo_screns = `*; where game = ${id};`
        const metodo_gener = `*; where id = (${gener});`

        const link = 'https://api.igdb.com/v4/screenshots'
        const link_video = 'https://api.igdb.com/v4/game_videos'
        const link_gener = 'https://api.igdb.com/v4/genres/'
        
        const games = getGame(metodo,id)
        const screens = getGame(metodo_screns,id,link)
        const video = getGame(metodo_screns,id,link_video)
        const gen = getGame(metodo_gener,id,link_gener)
        
    
       


        const data = games.map(gamer =>
            (gamer.first_release_date)
        )
        
        
    
        console.log(data[0])
        const date = new Date(data[0] * 1000)
        var dia = date.getDate();
        var mes = date.getMonth() + 1; // Os meses começam em zero, então adicionamos 1
        var ano = date.getFullYear();
        console.log(dia+'/'+mes+'/'+ano)
    
    
    
    
 

    
    
    return(
    <div>
    {games.length === 0 && <p>Carregando</p>}
    {games.map(game => (
            <div>
            <div className="conteiner_game"> 
                <div id="item-1">
                {game.cover && <img src={game.cover.url.replace('thumb', '1080p')} alt={`Capa de ${game.name}`} id="cover"/>}
                </div>
                <div id="item-2">
                <h1 className="gameName">{game.name}</h1>
                </div>
                <div id="item-3">
                    <p>Lançamento: {dia+'/'+mes+'/'+ano}</p>
                    <p>Genero: {gen.map(genere => (genere.name+" "))}</p>
                    <p>Perspectiva: Seila</p>
                    <p>Dublado:Sim</p>
                </div>
                <div id="item-4">
                    <h2 className="" id="make_reviw_text">REVIEWS:</h2>
                
                    <FaStar className="star"/>
                    <FaStar className="star"/>
                    <FaStar className="star"/>
                    <FaStar className="star"/>
                    <FaStar className="star"/>

                    <div className="botao" id='saiba'>
                        <h3>Fazer Review</h3>
                    </div>
                
                </div>
                <div id="item-5">
                    <p className="textGame">{game.storyline == null ? game.summary : game.storyline}</p>
                </div>
                <div id="item-6">
                {isVisible_left && <div className="buttonareal" id='buttonLeft' >
                    <img src={arrow} alt="arrow" className='arrowGame' onClick={prevtGame}/>
                </div>}
                {game.similar_games.map((item, index) => <GameCard key={game.similar_games[index]} gameID={game.similar_games[index]}/>)[i]}
                {isVisible &&<div className="buttonareal">
                    <img src={arrow} alt="arrow" className='arrowGame'onClick={nextGame}/>
                </div>}
                </div>
            </div>
            
                
                
                <div className="screenshots">
            
                
                <div id="carouselExampleFade" class="carousel slide carousel-fade">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        {screens.map(foto =>(<img class="d-block w-100" src={foto.url.replace('thumb', '1080p')} alt="First slide"/>))[0]}
                        </div>
                        <div class="carousel-item">
                        {screens.map(foto =>(<img class="d-block w-100" src={foto.url.replace('thumb', '1080p')} alt="Second slide"/>))[1]}
                        </div>
                        <div class="carousel-item">
                        {screens.map(foto =>(<img class="d-block w-100" src={foto.url.replace('thumb', '1080p')} alt="Third slide"/>))[2]}
                        </div>
                        <div class="carousel-item">
                        {video.map(urlvideo =>(<iframe
                        class="d-block w-100"
                        height="500"
                        src={`https://www.youtube.com/embed/${urlvideo.video_id}`}
                        title="Video Player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        alt="Fourth slide">           
                        </iframe>))[0]}
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                    </div>
                
                
            </div>
            


            </div>
        ))}
    </div>
    )
}


export default Game