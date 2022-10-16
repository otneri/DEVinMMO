import { useState, useEffect } from "react";
import { Grade } from "../../components/Grade/Grade";
import { Paper } from "../../components/Paper/Paper";
import { Paragraph } from "../../components/Paragraph/Paragraph";
import axios from "axios";
import { Botao } from "../../components/Botoes/Botao";



export const ListagemJogosPage = () => {
  const [inicial, setInicial] = useState([]);
  const [jogos, setJogos] = useState([]);

  async function getListaJogos ()  {


    const headers = {
    "X-RapidAPI-Key": "03ae6adad5mshdc8fdce2d2447a6p17edf6jsn77e08ea260e9",
    "X-RapidAPI-Host": "mmo-games.p.rapidapi.com",
    }
  
    return  axios
      .get(`https://mmo-games.p.rapidapi.com/games`, {headers})
      .then((response) => {
        console.log(response?.data);
        setJogos(response?.data)
        setInicial(response?.data)
    })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getListaJogos()

  }, [])
  
  
  
 
 
  const handleChange = ({ target }) => {
    if (!target.value) {
      setJogos(inicial);
      return;
    }

    const filterJogos = jogos?.filter((jogo) =>
      jogo.title.includes(target.value)
    );
    setJogos(filterJogos);
  };

  // LISTA DE DISPOSITIVOS

  return (
    <>
     <input type="text" onChange={handleChange} placeholder='Buscar'/>

      <Grade onload={()=>{}}>
      <Paragraph>Resultados ({jogos.length})</Paragraph> 
        
        {!jogos ? (
          <Paragraph>Carregando...</Paragraph>
        ) :
          ( 
          jogos?.map((jogo, id) => (
              
              <Paper key={id}>
                <Paragraph>{jogo.title}</Paragraph>
                <img src={jogo.thumbnail} alt="jogo" />
                <Paragraph>{jogo.short_description}</Paragraph>
                <Botao>Ver Mais</Botao>
              </Paper>
            ))
        ) 
        }
      </Grade>
    </>
  );
};
