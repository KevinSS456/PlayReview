import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getGame } from '../functions/SearchGame';
import GameCard from '../components/GameCard';
import { Link } from 'react-router-dom';

import '../style/home.css'

const number = 2000

const Home = () => {

  const timestamp = Date.now();
  console.log(timestamp/1000)
  const numero = parseInt(timestamp/1000)
  const link_screenn = 'https://api.igdb.com/v4/artworks'
  const metodo_recent = `*, hypes,release_dates.date; where hypes > 0 & release_dates.date > ${numero} & version_parent = null; sort hypes desc; limit 20;`
  const metodo_GTA = `*; where game = 52189;`
  const metodo_FF= `*; where game = 31551;`
  const metodo_Senua = `*; where game = 127342;`

  const wallpaper_GTA = getGame(metodo_GTA,'',link_screenn)
  const wallpaper_FF = getGame(metodo_FF,'',link_screenn)
  const wallpaper_Senua = getGame(metodo_Senua,'',link_screenn)
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
                <Link to='/game/52189'>
                   {wallpaper_GTA.map(scree =>(<img class="w-100 d-inline-block h-75 d-inline-block" src={scree.url.replace('thumb', '1080p')} alt={'Primeiro Slide'} className="bgHome"/>))}
                </Link>
                </div>
                 <div class="carousel-item">
                 <Link to='/game/31551'>
                   {wallpaper_FF.map(scree =>(<img class="w-100 d-inline-block" src={scree.url.replace('thumb', '1080p')} alt={'Segundo Slide'} className="bgHome"/>))[0]}
                   </Link>
                 </div>
                 <div class="carousel-item">
                 <Link to='/game/127342'>
                    {wallpaper_Senua.map(scree =>(<img class="w-100 d-inline-block h-75 d-inline-block" src={scree.url.replace('thumb', '1080p')} alt={'Terceiro Slide'} className="bgHome"/>))}
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
      <Link to='/'>
          <div className="botao" id='saiba'>
              <p id="botaoSaibaMais">SAIBA MAIS!</p>
          </div>
      </Link>
      </div>
        {recents.length === 0 && <p>Carregando..</p>}
       
        {recents.map(game => (
          <GameCard key={game.id} gameID={game.id} />
        ))}
      </div>

  );
};

export default Home;