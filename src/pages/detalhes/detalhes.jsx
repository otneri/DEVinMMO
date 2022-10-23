
import { useState, useEffect } from "react";
import { Grade } from "../../components/Grade/Grade";
import { Paper } from "../../components/Paper/Paper";
import { Paragraph } from "../../components/Paragraph/Paragraph";
import axios from "axios";
import { Form } from "../../components/Forms/Form";
import { useSelect } from "../../contexts/select/useSelect";
import { useComentario } from "../../contexts/comentarios/useComents";
import { DivComentsstld, Divnomesstld } from "./detalhesstld";
import { Detalhes } from "../../components/Images/img";
import { DivSearchstld } from "../../components/Inputs/InputComp.styled";
import { SubTitleStyled } from "../../components/SubTitle/SubTitle.styled";
import { SubTitle } from "../../components/SubTitle/SubTitulo";
import { json } from "react-router";


     


export const DetalhesPage = () => {
    
    const [inicial, setInicial] = useState([]);
    const [jogos, setJogos] = useState([]);
    const {select,setSelect} = useSelect()
    const {comentariopost} = useComentario()

    let comentarios = [{"nome" : "astolfo", "coment" :"bom jogo" }]
    
    const transforma = JSON.stringify(comentarios)
    localStorage.setItem('coments' , transforma)
     const pegaComent = () => {
        const pegaComent = localStorage.getItem('coments')  
        const comentario = JSON.parse(pegaComent)
        return console.log(comentarios.push(...comentario)); 
        
    
     }
    
   
   
     console.log(select);


    return (

        
        
        
        <>
            <Divnomesstld>
            <SubTitle>{select[0].title}, {select[0].release_date}</SubTitle>
            </Divnomesstld>
            <DivSearchstld>
            <Detalhes children={select[0].thumbnail} onClick={console.log(comentariopost)} />
            </DivSearchstld>
            <Divnomesstld>
                <>
                <SubTitle>Gênero:</SubTitle>
                <Paragraph>{select[0].genre}</Paragraph>
                </>
                <>
                <SubTitle>Plataforma:</SubTitle>
                <Paragraph>{select[0].platform}</Paragraph>
                </>
                <>
                <SubTitle>Descrição:</SubTitle>
                <Paragraph>{select[0].short_description}</Paragraph>
                </>

            </Divnomesstld>
            <DivComentsstld>

            <Paragraph onLoad={pegaComent()}></Paragraph>
            {comentarios.map((coment, id) => (
                <Paper key={id}>
                    <Divnomesstld>
                    <SubTitle>{coment.nome}:</SubTitle>
                    <Paragraph>{coment.coment}</Paragraph>
                    </Divnomesstld>
                </Paper>
            ))}

            </DivComentsstld>

            
            
        
            <Form />
        
        </>
        
        


        
        
    )


}