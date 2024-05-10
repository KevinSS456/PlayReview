import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getGame } from '../functions/SearchGame';
import GameCard from '../components/GameCard';
import { Link } from 'react-router-dom';
import Clarity from'../assets/clarity.png'
import Coração from'../assets/coração.png'
import Ranking from'../assets/ranking.png'
import arrow from '../assets/arrow.png'

import '../style/home.css'

const number = 2000

const Home  = () => {

  const [i, setContador] = useState(0);


  var x = 1
  var y = 2
  var z = 3


  function nextGames(){

    if (i === 10) {
      setContador(0); // Reinicia o contador quando atingir 20
    } else {
      setContador(i + 1);
    }
    
  }
  function prevtGames(){

    if (i === 20) {
      setContador(0); // Reinicia o contador quando atingir 20
    } else {
      setContador(i - 1);
    }
    
  }
  const timestamp = Date.now();
  console.log(timestamp/1000)
  const numero = parseInt(timestamp/1000)
  const link_screenn = 'https://api.igdb.com/v4/artworks'
  const metodo_recent = `*, hypes,release_dates.date; where hypes > 0 & release_dates.date > ${numero} & version_parent = null; sort hypes desc; limit 20 ;`
  const metodo_Senua = `*; where game = 127342;`
  const metodo_FF= `*; where game = 31551;`
  const metodo_Elden = `*; where game = 240009;`

  const wallpaper_Senua = getGame(metodo_Senua,'',link_screenn)
  const wallpaper_FF = getGame(metodo_FF,'',link_screenn)
  const wallpaper_Elden = getGame(metodo_Elden,'',link_screenn)
  const recents = getGame(metodo_recent)
  return (
    
    <div className='conteinerHome'>
        <div id='home' class='w-100 d-inline-block'>
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                 <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                 <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                 <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                <div class="carousel-caption d-none d-md-block">
                        <h5>Senua's Saga: Hellblade II</h5>
                        <p>Entre e faça sua review</p>
                    </div>
                <Link to='/game/127342'>
                   {wallpaper_Senua.map(scree =>(<img class="w-100  img-fluid" src={scree.url.replace('thumb', '1080p')} alt={'Primeiro Slide'} className="bgHome"/>))}
                </Link>
                </div>
                 <div class="carousel-item">
                 <div class="carousel-caption d-none d-md-block">
                        <h5>Final Fantasy 15</h5>
                        <p>Entre e faça sua  review</p>
                    </div>
                 <Link to='/game/31551'>
                   {wallpaper_FF.map(scree =>(<img class="w-100  img-fluid" src={scree.url.replace('thumb', '1080p')} alt={'Segundo Slide'} className="bgHome"/>))[0]}
                   </Link>
                 </div>
                 <div class="carousel-item">
                     <div class="carousel-caption d-none d-md-block">
                        <h5>Elden Ring: Shadow of the Erdtree</h5>
                        <p>Entre e faça a sua review</p>
                    </div>
                 <Link to='/game/240009'>
                    {wallpaper_Elden.map(scree =>(<img  class="w-100  h-65  img-fluid" src={scree.url.replace('thumb', '1080p')} alt={'Terceiro Slide'} className="bgHome"/>))}
                    </Link>
                 </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
               <span class="carousel-control-prev-icon" aria-hidden="true"></span>
               <span class="sr-only">Anterior</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
               <span class="carousel-control-next-icon" aria-hidden="true"></span>
               <span class="sr-only">Próximo</span>
            </a>
          </div>
      </div>
      <div id="home2">
          <div className="titleHome2">
              <p className="title">BEM VINDO A gAMErANK</p>
              <p className="subtitle">Aqui você descobre os melhores jogos do momento com a opinião de outros gamers!</p>
          </div>
            <ul id='infoHome'>
              <li className='liHome'>
              <img src={Clarity} alt="sim" className='iconHome'/>
                <p className='liHomeText'>Salve todos os jogos que já jogou em uma lista única!</p>
              </li>
              <li className='liHome'>
              <img src={Coração} alt="sim" className='iconHome'/>
                <p className='liHomeText'>Escreva e leia reviews sobre os jogos do momento.</p>
              </li>
              <li className='liHome'>
              <img src={Ranking} alt="sim" className='iconHome'/>
                <p className='liHomeText'>Compartilhe o seu amor pelo jogo favorito com amigos.</p>
              </li>
            </ul>
          <Link to='Login'>
          <div className="botao" id='botaoComeça'>
            <h3 id='textbotao'>COMECE AGORA !</h3>
          </div>
          </Link>
      </div>
      <div id="home3">
          <h2 id='proxTitle'>Lançamentos de Maio</h2>
          {recents.length === 0 && <p>Carregando..</p>}
       <div className="CardStyle">
        <div className="buttonareal" id='buttonLeft' onClick={prevtGames}>
          <img src={arrow} alt="arrow" className='arrowHome'/>
          </div>
       {recents.map(game => (
        <GameCard key={game.id} gameID={game.id} />
       ))[i]}
       {recents.map(game => (
        <GameCard key={game.id} gameID={game.id} />
       ))[(i+1)]}
       {recents.map(game => (
        <GameCard key={game.id} gameID={game.id} />
       ))[(i+2)]}
       {recents.map(game => (
        <GameCard key={game.id} gameID={game.id} />
       ))[(i+3)]}
       <div className="buttonareal" onClick={nextGames}>
          <img src={arrow} alt="arrow" className='arrowHome'/>
          </div>

       </div>
       
      </div>
      <footer>
          <p>@GamerRank</p>
      </footer>
   
      </div>

  );
};

export default Home;