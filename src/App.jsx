import {Contador} from './pages/Contador';
import {Page1} from './pages/Page1';
import {Page2} from './pages/Page2';
import {Page3} from './pages/Page3';
import {Page4} from './pages/Page4';
import {Page5} from './pages/Page5';
import {Page6} from './pages/Page6';
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
            <Route path='/2000' element={<Page2 />}></Route>
            <Route path='/1900' element={<Page3 />}></Route>
            <Route path='/1800' element={<Page4 />}></Route>
            <Route path='/1700' element={<Page5 />}></Route>
            <Route path='/1600' element={<Page6 />}></Route>
          </Routes>
          
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
