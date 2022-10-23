import { useState, useEffect } from "react";
import { Grade, GradeJogos } from "../../components/Grade/Grade";
import { Paper, PaperListJogos } from "../../components/Paper/Paper";
import { Paragraph } from "../../components/Paragraph/Paragraph";
import axios from "axios";
import { Botao } from "../../components/Botoes/Botao";
import { useSelect } from "../../contexts/select/useSelect";
import {Mmo} from '../../services/apiMMO'
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";  
import { InputSearch } from "../../components/Inputs/InputComp";
import { Divtxtstld } from "./text.stld";



export const ListagemJogosPage = () => {
  const [inicial, setInicial] = useState([]);
  const [jogos, setJogos] = useState([]);
  const {select,setSelect} = useSelect()
  const {handleSubmit} = useForm()
  async function getListaJogos ()  {


    const headers = {
    "X-RapidAPI-Key": '03ae6adad5mshdc8fdce2d2447a6p17edf6jsn77e08ea260e9',
    "X-RapidAPI-Host": 'mmo-games.p.rapidapi.com',
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
      jogo.id == target?.value
      )
       const salvaSelect = setSelect(novoSelect)
       
       console.log(target.value)
       return salvaSelect
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
      <>
      <InputSearch type="text" onChange={handleChange} placeholder='Buscar'/>
      </>
      <Divtxtstld>
      
      <Paragraph>Resultados ({jogos.length})</Paragraph> 
      </Divtxtstld>

      <GradeJogos  >
          
          {!jogos ? (
            <Paragraph>Carregando...</Paragraph>
          ) :
            ( 
            jogos?.map((jogo, id) => (
                
                <PaperListJogos key={id}>
                  <Paragraph>{jogo?.title}</Paragraph>
                  <img src={jogo?.thumbnail} alt="jogo" />
                  <Paragraph>{jogo?.short_description.slice(0,120)}...</Paragraph>
                  <Link to='/detalhes'><Botao value={jogo?.id} handleClick={handleSalva}>Ver mais</Botao></Link>
                  
                </PaperListJogos>
              ))
          ) 
          }
      </GradeJogos>
    </>
  );
};
