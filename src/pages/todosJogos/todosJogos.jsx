import { useState, useEffect } from "react";
import { Grade } from "../../components/Grade/Grade";
import { Paper } from "../../components/Paper/Paper";
import { Paragraph } from "../../components/Paragraph/Paragraph";
import axios from "axios";
import { Botao } from "../../components/Botoes/Botao";
import { useSelect } from "../../contexts/select/useSelect";
import {Mmo} from '../../services/apiMMO'



export const ListagemJogosPage = () => {
  const [inicial, setInicial] = useState([]);
  const [jogos, setJogos] = useState([]);
  const {select,setSelect} = useSelect()

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

  
  function handleSalva  ({target})  {
    const novoSelect = jogos?.filter(jogo => 
      jogo.id == target.value
    )
    const salvaSelect = setSelect(novoSelect)
    
    
    return salvaSelect;  
    
  }
  
 
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
                <Botao value={jogo.id} handleClick={handleSalva}>Ver Mais</Botao>
                
              </Paper>
            ))
        ) 
        }
      </Grade>
    </>
  );
};
