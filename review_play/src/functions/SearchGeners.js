import { getGame } from "./SearchGame"


export async function getGener(gens){
    const metodo = `*; where id = (${gens});`
    const link_genre = 'https://api.igdb.com/v4/genres'

    const genero = getGame(metodo,'',link_genre)
    const resp = genero.map( gen => (gen.name))
  
    return resp
}


