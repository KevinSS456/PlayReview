import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getGame } from '../functions/SearchGame';
import GameCard from '../components/GameCard';

import '../style/home.css'


const number = 2000

const Home = () => {

  const timestamp = Date.now();
  console.log(timestamp/1000)
  const numero = parseInt(timestamp/1000)
  const metodo_recent = `*, hypes,release_dates.date; where hypes > 0 & release_dates.date > ${numero}; sort hypes desc; limit 20;`
  
  
  
  const recents = getGame(metodo_recent)


  return (
    <div className='conteinerHome'>
      <h1>Jogos com classificação superior a 75</h1>

        {recents.length === 0 && <p>Carregando..</p>}
        {recents.map(game => (
          <GameCard key={game.id} gameID={game.id} />
        ))}

    </div>
  );
};

export default Home;