
import { useState, useEffect } from "react";
import { Grade } from "../../components/Grade/Grade";
import { Paper } from "../../components/Paper/Paper";
import { Paragraph } from "../../components/Paragraph/Paragraph";
import axios from "axios";
import { Form } from "../../components/Forms/Form";


export const pegaComent = () => {
    const [coment, setComent] = useState([])


    console.log(localStorage.getItem('nome')); 
    localStorage.getItem('coment')

 }
     


export const DetalhesPage = () => {
    
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



    return (
        
        <Form />
        
        
    )


}