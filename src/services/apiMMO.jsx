import axios from "axios";
import { useJogos } from "../contexts/useJogos";


 export const mmo = axios.create({
    baseURL: `https://mmo-games.p.rapidapi.com`,
  });

// export async function getListaJogos ()  {


//     const headers = {
//     "X-RapidAPI-Key": "03ae6adad5mshdc8fdce2d2447a6p17edf6jsn77e08ea260e9",
//     "X-RapidAPI-Host": "mmo-games.p.rapidapi.com",
//     }
  
//     return  axios
//       .get(`https://mmo-games.p.rapidapi.com/games`, {headers})
//       .then((response) => {
//         (response?.data)
//     })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

