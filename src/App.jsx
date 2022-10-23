import {Rotas} from './routes/index'
import { ThemeProvider } from "styled-components";
import { temaDark, temaPrincipal } from "./themes";
import { SelectProvider } from './contexts/select/selectContext';
import {BrowserRouter} from 'react-router-dom'
import { ListagemJogosPage } from './pages';

function App() {
 

  return (
     <BrowserRouter>
    <ThemeProvider theme={temaPrincipal}>
        <SelectProvider>
          <Rotas/>
        </SelectProvider>     
    </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
