import {ListagemJogosPage} from './pages/todosJogos/todosJogos'
import {DetalhesPage} from './pages/detalhes/detalhes'
import { ThemeProvider } from "styled-components";
import { temaDark, temaPrincipal } from "./themes";
import { NoticiasPage } from './pages/noticias/noticias';
import { SelectProvider } from './contexts/select/selectContext';

function App() {
 

  return (
    <ThemeProvider theme={temaPrincipal}>
        <SelectProvider>
          <ListagemJogosPage/>
        </SelectProvider>
      
    </ThemeProvider>
  )
}

export default App
