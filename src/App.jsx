import {Contador} from './pages/Contador';
import {Page1} from './pages/Page1';
import {NavBar} from './pages/NavBar';
// Herramientas para trabajar con rutas de navegación
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css'

function App() {

  return (
    <>
      <div>
        <BrowserRouter>

          <Contador />
          {/* La barra de navegacion va a estar en todas las paginas */}
          <NavBar />
          {/* Dentro de cada ruta van a estar las distintas paginas */}
          <Routes>
            {/* Pagina de inicio */}
            <Route path='/' element={<Page1 />}></Route>
          </Routes>
          
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
