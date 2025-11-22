// Pagina principal
import './stylesPage1.css';
import {Page2} from './Page2';
import {Page3} from './Page3';
import {Page4} from './Page4';
import {Page5} from './Page5';
import {Page6} from './Page6';
import {Link} from 'react-router-dom';


export const Page1 = () => {
    return <div>
        <h1>Eventos historicos de cada siglo</h1>
        <ul class='date-links'>
            {/* Se vincularan los Links con cada ruta definida en App.jsx */}
            <li class='fecha'>
                <Link to='/2000' element={<Page2/>}>2000</Link>
            </li>
            <li class='fecha'>
                <Link to='/1900' element={<Page3/>}>1900</Link>
            </li>
            <li class='fecha'>
                <Link to='/1800' element={<Page4/>}>1800</Link>
            </li>
            <li class='fecha'>
                <Link to='/1700' element={<Page5/>}>1700</Link>
            </li>
            <li class='fecha'>
                <Link to='/1600' element={<Page6/>}>1600</Link>
            </li>
        </ul>
    </div>
}