import { Navigate, Route, Routes } from "react-router-dom";
import {DetalhesPage,ListagemJogosPage,NoticiasPage} from '../pages/index' 

export const Rotas = () => {
    return (

    <Routes>
        <Route path="/" element={<ListagemJogosPage/>}/>
        <Route path="/detalhes" element={<DetalhesPage/>}/>
        <Route path="/noticias" element={<NoticiasPage/>}/>
        <Route path="*" element={<Navigate to="/" replace={true} />} />
    </Routes>

    )
}