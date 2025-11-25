import {TextBox} from '../components/TextBox.jsx';
import { ImageBox } from '../components/ImageBox.jsx';
import './stylesPage2.css';

export const Page4 = () => {

    return (
        <div className='grid-container'>
            {/* Se ordenaran los cuadros con css grid */}
            <div className='text-item1'>
                <TextBox>
                    <h2>Independencias en América Latina</h2>
                    <p>
                        Entre los años 1809 y 1829 ocurrieron multiples guerras de independencia hispanoamericanas que afectaron a todo el Imperio español​ y en los cuales se enfrentaron el bando a favor de mantener la integridad de la Monarquía española, que fue derrotado y se conocería más tarde como «realista» o «virreinal», contra el bando a favor de la independencia o secesión de nuevos estados americanos, que triunfó y fue denominado posteriormente «revolucionario» o «patriota».
                    </p>    
                </TextBox>
            </div>
            <div className='img-item1'>
                <ImageBox>
                    <img src="https://c.files.bbci.co.uk/89D0/production/_105608253_juraindependencia.jpg"/>
                </ImageBox>
            </div>
            {/* Fila 2 */}
            <div className='img-item2'>
                <ImageBox>
                    <img src="https://pymstatic.com/4895/conversions/teoria-evolucion-del-hombre-wide_webp.webp"/>
                </ImageBox>
            </div>
            <div className='text-item2'>
                <TextBox>
                    <h2>Teoria de la evolución</h2>
                    <p>
                        En la década de 1850, Darwin escribió un libro controversial e influyente llamado El origen de las especies. En él, propuso que las especies evolucionan (o, como lo dijo él, tienen "descendencia con modificaciones") y que todos los seres vivos pueden rastrear su ascendencia a un antepasado común. Tambien sugirió un mecanismo para la evolución: la selección natural, en la que los rasgos heredables que le ayudan a un organismo a sobrevivir y reproducirse, se vuelven más comunes en una población a lo largo del tiempo.
                    </p>    
                </TextBox>
            </div>
            {/* Fila 3 */}
            <div className='text-item3'>
                <TextBox>
                    <h2>Movimientos artisticos</h2>
                    <p>
                        Entre los movimientos artisticos que predominaron en este siglo está el "Romanticismo" caracterizado por priorizar la emoción, la imaginación y el individualismo sobre la razón. Se opone al racionalismo y al equilibrio del Neoclasicismo, valorando la subjetividad, la naturaleza y el sentimiento. Por otro lado, está el "Impresionismo", estilo pictórico que se origina en Francia, en la segunda mitad del siglo XIX. Se caracteriza por su persistente experimentación con la iluminación. El manejo de la luz se consideraba como un factor crucial para alcanzar belleza y balance en la pintura.
                    </p>    
                </TextBox>
            </div>
            <div className='img-item3'>
                <ImageBox>
                    <img src="https://www.arkiplus.com/wp-content/uploads/2022/05/Abadia-de-Westminster.jpg"/>
                </ImageBox>
            </div>
        </div>
    )
}