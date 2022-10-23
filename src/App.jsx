import {Rotas} from './routes/index'
import { ThemeProvider } from "styled-components";
import { temaDark, temaPrincipal } from "./themes";
import { SelectProvider } from './contexts/select/selectContext';
import {BrowserRouter} from 'react-router-dom'
import { HeaderBar } from "./components/HeaderBar/HeaderBar";
import {Global} from './themes/TemaGlobal';
import { ComentarioProvider } from './contexts/comentarios/comentarioContext';
import { NoticiaProvider } from './contexts/noticias/noticiasContext';

function App() {
 

  return (
     <BrowserRouter>
    <ThemeProvider theme={temaPrincipal}>
        <SelectProvider>
        <ComentarioProvider>
        <NoticiaProvider>
          <Global/>
          <HeaderBar/>
          <Rotas/>
        </NoticiaProvider>
        </ComentarioProvider> 
        </SelectProvider>     
    </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
