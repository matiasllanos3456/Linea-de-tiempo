import './stylesNavBar.css'
import {Page1} from './Page1'
import {Link} from 'react-router-dom'
export const NavBar = () => {
    return <div class='Nav-container'>
        <nav class='navbar'>
            <ul class='nav-links'>
                <li class="#">
                    {/* Este link llevara al inicio */}
                    <Link to='/' element={<Page1 />}>Inicio</Link>
                </li>
                <li class="#">Fuentes</li>
                <li class="#">Acerca de</li>
                <li class="#">Ajustes</li>
            </ul>
        </nav>
    </div>
}