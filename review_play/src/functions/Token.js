import axios from 'axios';

const clientID = import.meta.env.VITE_IGDB_CLIENT_ID
const clientSecret = import.meta.env.VITE_IGDB_CLIENT_SECRET

export async function getToken() {
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
