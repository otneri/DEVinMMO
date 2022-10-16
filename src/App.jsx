import {ListagemJogosPage} from './pages/todosJogos/todosJogos'
import {DetalhesPage} from './pages/detalhes/detalhes'
import { ThemeProvider } from "styled-components";
import { temaDark, temaPrincipal } from "./themes";
import { JogosContexto } from './contexts/jogosContext';
import { NoticiasPage } from './pages/noticias/noticias';

function App() {
 

  return (
    <ThemeProvider theme={temaPrincipal}>
      
        <DetalhesPage/>
      
    </ThemeProvider>
  )
}

export default App
