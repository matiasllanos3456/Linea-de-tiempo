// ...existing code...
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import { NavBar } from './pages/NavBar'
import { Page1 } from './pages/Page1'
import { Fuentes } from './pages/Fuentes'
import { AcercaDe } from './pages/AcercaDe'
import { Ajustes } from './pages/Ajustes'
import { Page2 } from './pages/Page2'
import { Page3 } from './pages/Page3'
import { Page4 } from './pages/Page4'
import { Page5 } from './pages/Page5'
import { Page6 } from './pages/Page6'

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  )
}

const AppLayout = () => {
  const location = useLocation()
  const bgClass =
  location.pathname === '/' || location.pathname === '/2000' || location.pathname === '/1900' || location.pathname === '/1800' || location.pathname === '/1700' || location.pathname === '/1600'? 'bg-home' : 'bg-dark'

  return (
    <div className={bgClass}>
      <NavBar />
      <Routes>
        <Route path='/' element={<Page1 />} />
        <Route path='/Fuentes' element={<Fuentes />} />
        <Route path='/AcercaDe' element={<AcercaDe />} />
        <Route path='/Ajustes' element={<Ajustes />} />
        <Route path='/2000' element={<Page2 />} />
        <Route path='/1900' element={<Page3 />} />
        <Route path='/1800' element={<Page4 />} />
        <Route path='/1700' element={<Page5 />} />
        <Route path='/1600' element={<Page6 />} />
      </Routes>
    </div>
  )
}

export default App
// ...existing code...