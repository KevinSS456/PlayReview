import { getGame } from "./SearchGame"


export async function getGener(gens){
    const title = []
    const metodo = `*; where id = (2,11,8);`
    const link_genre = 'https://api.igdb.com/v4/genres'

    const genero = await getGame(metodo,'',link_genre)
    

    
 
    
    return genero
  
}


