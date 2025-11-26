import './stylesNavBar.css'
import {Page1} from './Page1'
import {AcercaDe} from './AcercaDe'
import {Fuentes} from './Fuentes'
import {Ajustes} from './Ajustes'
import {Link} from 'react-router-dom'

export const NavBar = () => {
    return <div class='Nav-container'>
        <nav class='navbar'>
            <ul class='nav-links'>
                <li class="#">
                    {/* Este link llevara al inicio */}
                    <Link to='/' element={<Page1 />}>Inicio</Link>
                </li>
                <li class="#">
                    <Link to='/Fuentes' element={<Fuentes />}>Fuentes</Link>
                </li>
                <li class="#">
                    <Link to='/AcercaDe' element={<AcercaDe />}>Acerca de</Link>
                </li>
                <li class="#">
                    <Link to='/Ajustes' element={<Ajustes />}>Ajustes</Link>
                </li>
            </ul>
        </nav>
    </div>
}