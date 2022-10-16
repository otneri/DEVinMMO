import { useState, useEffect } from "react";
import { Grade } from "../../components/Grade/Grade";
import { Paper } from "../../components/Paper/Paper";
import { Paragraph } from "../../components/Paragraph/Paragraph";
import axios from "axios";
import { Botao } from "../../components/Botoes/Botao";



export const NoticiasPage = () => {
  const [inicial, setInicial] = useState([]);
  const [noticias, setnoticias] = useState([]);

  async function getListanoticias ()  {


    const headers = {
    "X-RapidAPI-Key": "03ae6adad5mshdc8fdce2d2447a6p17edf6jsn77e08ea260e9",
    "X-RapidAPI-Host": "mmo-games.p.rapidapi.com",
    }
  
    return  axios
      .get(`https://mmo-games.p.rapidapi.com/latestnews`, {headers})
      .then((response) => {
        console.log(response?.data);
        setnoticias(response?.data)
        setInicial(response?.data)
    })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getListanoticias()

  }, [])
  
  
  
 
 
  const handleChange = ({ target }) => {
    if (!target.value) {
      setnoticias(inicial);
      return;
    }

    const filternoticias = noticias?.filter((noticia) =>
      noticia.title.includes(target.value)
    );
    setnoticias(filternoticias);
  };

  // LISTA DE DISPOSITIVOS

  return (
    <>
     <input type="text" onChange={handleChange} placeholder='Buscar' />

      <Grade onload={()=>{}}>
        <Paragraph>Resultados: {!noticias? "Carregando":noticias.length}</Paragraph>
        {!noticias ? (
          <Paragraph>Carregando...</Paragraph>
        ) :
         (noticias?.map((noticia, id) => (
            
            <Paper key={id}>
              <Paragraph>{noticia.title}</Paragraph>
              <p>{noticia.short_description}</p>
              <img src={noticia.thumbnail} alt="noticia" />
              <Botao>Ver Mais</Botao>
            </Paper>
          ))
        )}
      </Grade>
    </>
  );
};
