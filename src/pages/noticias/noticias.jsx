import { useState, useEffect } from "react";
import { Grade } from "../../components/Grade/Grade";
import { Paper } from "../../components/Paper/Paper";
import { Paragraph } from "../../components/Paragraph/Paragraph";
import axios from "axios";
import { Botao } from "../../components/Botoes/Botao";
import { useNoticia } from "../../contexts/noticias/useNoticias";
import { BannerNews } from "../../components/Images/img";
import { InputSearch } from "../../components/Inputs/InputComp";
import { Divtxtstld } from "../todosJogos/text.stld";




export const NoticiasPage = () => {
  const [inicial, setInicial] = useState([]);
  const [noticias, setnoticias] = useState([]);
  const {sitenoticia,setSitenoticia} = useNoticia('#')

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
  
  
  
  function handleSite  ({target})  {
    const novoSelect = noticias?.filter(noticia => 
      noticia.article_url == target.value
      )
      return window.location.assign(novoSelect[0].article_url)  
    }

 
 
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
      <InputSearch type="text" onChange={handleChange} placeholder='Buscar' />

      <Divtxtstld>
      <Paragraph>Resultados: {!noticias? "Carregando":noticias.length}</Paragraph>

      </Divtxtstld>
      <Grade >
          {!noticias ? (
            <Paragraph>Carregando...</Paragraph>
          ) :
          (noticias?.map((noticia, id) => (
              
            <Paper key={id}>
                <BannerNews children={noticia.thumbnail} alt="noticia" />
                <div>
                <Paragraph>{noticia.title}</Paragraph>
                <Paragraph>{noticia.short_description}</Paragraph>
                <Botao value={noticia.article_url} handleClick={handleSite}>  Ver mais</Botao>                         
                </div>
              </Paper>
            ))
          )}
      </Grade>
    </>
  );
};
