import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getGame } from '../functions/SearchGame';
import GameCard from '../components/GameCard';

import '../style/home.css'


const number = 2000

const Home = () => {
  const metodo = `*, cover.url; rating; sort rating desc; limit 20`
  const games = getGame(metodo)


  return (
    <div>
      <h1>Jogos com classificação superior a 75</h1>

        {games.length === 0 && <p>Carregando..</p>}
        {games.map(game => (
          <GameCard key={game.id} gameID={game.id} />
        ))}

    </div>
  );
};

export default Home;