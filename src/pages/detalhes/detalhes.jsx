
import { useState, useEffect } from "react";
import { Grade } from "../../components/Grade/Grade";
import { Paper } from "../../components/Paper/Paper";
import { Paragraph } from "../../components/Paragraph/Paragraph";
import axios from "axios";
import { Form } from "../../components/Forms/Form";
import { useSelect } from "../../contexts/select/useSelect";


     


export const DetalhesPage = () => {
    
    const [inicial, setInicial] = useState([]);
    const [jogos, setJogos] = useState([]);
    const {select,setSelect} = useSelect()
    let comentarios = []
    
     const pegaComent = () => {
        const pegaComent = localStorage.getItem('coments')  
        const comentario = JSON.parse(pegaComent)
        return console.log(comentarios.push(...comentario)); 
        
    
     }
    
   



    return (
        <>
            {/* <Paragraph>{select.title}</Paragraph> */}
            <h1 onLoad={pegaComent()}>Olá</h1>
            {comentarios.map((coment, id) => (
                <Paper key={id}>
                    <h1>{coment.nome}</h1>
                    <h1>{coment.coment}</h1>
                </Paper>
            ))}

            
            
        
            <Form />
        
        </>


        
        
    )


}