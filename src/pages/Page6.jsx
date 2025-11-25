import {TextBox} from '../components/TextBox.jsx';
import { ImageBox } from '../components/ImageBox.jsx';
import './stylesPage2.css';

export const Page6 = () => {

    return (
        <div className='grid-container'>
            {/* Se ordenaran los cuadros con css grid */}
            <div className='text-item1'>
                <TextBox>
                    <h2>Revolución cientifica</h2>
                    <p>
                        Fue un período de transformación radical en la forma en que se entendía el mundo, sustituyendo la filosofía antigua por el método científico basado en la observación, la experimentación y la razón. Este proceso, que se consolidó durante los siglos XVI y XVII, dio lugar a descubrimientos fundamentales en campos como la física, la astronomía, la biología y la química, sentando las bases de la ciencia moderna. Figuras clave como Isaac Newton, con su ley de la gravitación universal; Galileo Galilei, quien contribuyó a la revolución copernicana y René Descartes quien creó el método cartesiano y la geometría analítica, fueron pilares de este movimiento. 
                    </p>    
                </TextBox>
            </div>
            <div className='img-item1'>
                <ImageBox>
                    <img src="https://i0.wp.com/economiayfuturo.es/wp-content/uploads/2013/06/3752439-55809231.jpg?fit=420%2C350&ssl=1"/>
                </ImageBox>
            </div>
            {/* Fila 2 */}
            <div className='img-item2'>
                <ImageBox>
                    <img src="https://www.worldhistory.org/uploads/images/16252.png"/>
                </ImageBox>
            </div>
            <div className='text-item2'>
                <TextBox>
                    <h2>Guerra de los 30 años</h2>
                    <p>
                        La guerra de los Treinta Años fue una guerra librada en la Europa Central entre los años 1618 y 1648, en esta intervinieron la mayoria de las grandes potencias europeas de la época. Inicialmente se trataba de un conflico político-religioso entre Estados partidarios de la reforma y la contrarreforma dentro del propio Sacro Imperio Romano Germánico, la intervención paulatina de las distintas potencias europeas convirtió gradualmente el conflicto en una guerra general por toda Europa, finalizando con la Paz de Westfalia y la Paz de los Pirineos.
                    </p>    
                </TextBox>
            </div>
            {/* Fila 3 */}
            <div className='text-item3'>
                <TextBox>
                    <h2>Revolución inglesa</h2>
                    <p>
                        Conocida también como guerra civil inglesa es el periodo de la historia del Reino de Inglaterra que abarca desde 1642 hasta 1688. Se extiende desde el fin del reinado de Carlos I, pasando por un período republicano y El Protectorado de Oliver Cromwell, la restauración de los Estuardo y finaliza con la Revolución Gloriosa, que destituye a Jacobo II. En este contexto se incluye una serie de conflictos armados que se libraron entre realistas y parlamentarios entre 1642 y 1651, dividiendo al conflicto en 3 guerras importantes, finalizando con una gran victoria de Cromwell y la derrota de Carlos II de Inglaterra al término del tercer y último de los enfrentamientos.
                    </p>    
                </TextBox>
            </div>
            <div className='img-item3'>
                <ImageBox>
                    <img src="https://lh3.googleusercontent.com/ci/AL18g_Q_vYZTJEz-jGLdZhaOhHifiXqAZG7DDus43QNHCX3mUzX3ujLTr6qaq7_MMtA3IcuCuergeQ=s1200"/>
                </ImageBox>
            </div>
        </div>
    )
}