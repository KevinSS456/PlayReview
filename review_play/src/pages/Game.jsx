
import '../style/game.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const clientID = import.meta.env.VITE_IGDB_CLIENT_ID
const clientSecret = import.meta.env.VITE_IGDB_CLIENT_SECRET

const Game = () => {
    const [games, setGames] = useState([]);
    async function getToken() {
      try {
          const response = await axios.post('https://id.twitch.tv/oauth2/token', null, {
          params: {
              client_id: clientID,
              client_secret: clientSecret,
              grant_type: 'client_credentials'
          }
          });
          return response.data.access_token;
      } catch (error) {
          console.error('Erro ao obter token:', error);
          throw error;
      }
      }
      
  
    useEffect(() => {
      const fetchGames = async () => {
        try {
          const token = await getToken();
          const response = await axios.get('http://localhost:3000/igdb-api', {
            params: {
              token:`${token}` // Substitua pelo seu token de acesso
            }
          });
          setGames(response.data);
        } catch (error) {
          console.error('Erro ao buscar jogos:', error);
        }
      };
  
      fetchGames();
    }, []);
    return(
    <div className="class"> 
    {games.map(game => (
        <li key={game.id}>
         {game.cover && <img src={game.cover.url.replace('thumb', '1080p')} alt={`Capa de ${game.name}`} />}
         </li>
        ))}
    </div>
    )
    
}

export default Game