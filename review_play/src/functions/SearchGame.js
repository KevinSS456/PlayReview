import { useState, useEffect } from 'react';
import axios from 'axios';
import { getToken } from './Token'

export function getGame(metodo, query = '',url = 'https://api.igdb.com/v4/games/'){
    const [games, setGames] = useState([]);
    
  useEffect(() => {
    const fetchGames = async () => {
      try {
        const token = await getToken();
        const response = await axios.get('http://localhost:3000/igdb-api', {
          params: {
            token:`${token}`,
            method: `${metodo}`,
            url: `${url}` // Substitua pelo seu token de acesso
          }
        });
        setGames(response.data);
      } catch (error) {
        console.error('Erro ao buscar jogos:', error);
      }
    };

    fetchGames();
  }, [query]);

  return games

}