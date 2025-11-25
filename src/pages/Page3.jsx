import {TextBox} from '../components/TextBox.jsx';
import { ImageBox } from '../components/ImageBox.jsx';
import './stylesPage2.css';

export const Page3 = () => {

    return (
        <div className='grid-container'>
            {/* Se ordenaran los cuadros con css grid */}
            <div className='text-item1'>
                <TextBox>
                    <h2>Primera guerra mundial</h2>
                    <p>
                        Fue un conflicto bélico global (1914-1918) que enfrentó a las Potencias Centrales (Alemania, Austria-Hungría, Imperio Otomano) contra los Aliados (Francia, Reino Unido, Rusia, y más tarde EE.UU. y otros). Comenzó tras el asesinato del archiduque Francisco Fernando de Austria y se caracterizó por la guerra de trincheras y el uso de nuevas tecnologías, resultando en millones de muertos. Finalizó con la victoria de los Aliados y la firma del Tratado de Versalles, que redibujó el mapa de Europa y sentó las bases para futuros conflictos. 
                    </p>    
                </TextBox>
            </div>
            <div className='img-item1'>
                <ImageBox>
                    <img src="https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/363B/production/_104238831_gettyimages-514866302.jpg.webp"/>
                </ImageBox>
            </div>
            {/* Fila 2 */}
            <div className='img-item2'>
                <ImageBox>
                    <img src="https://okdiario.com/img/2020/12/03/segunda-guerra-mundial-1-655x368.jpg"/>
                </ImageBox>
            </div>
            <div className='text-item2'>
                <TextBox>
                    <h2>Segunda guerra mundial</h2>
                    <p>
                        Fue un conflicto global que duró desde 1939 hasta 1945, enfrentando a las potencias del Eje (Alemania, Italia y Japón) contra los Aliados (liderados por Reino Unido, Estados Unidos y la Unión Soviética). Inició con la invasión de Polonia por Alemania, y la guerra terminó después de la rendición de Alemania en mayo de 1945 y la rendición de Japón en septiembre de 1945, tras los bombardeos atómicos en Hiroshima y Nagasaki. 
                    </p>    
                </TextBox>
            </div>
            {/* Fila 3 */}
            <div className='text-item3'>
                <TextBox>
                    <h2>Llegada del hombre a la luna</h2>
                    <p>
                        El Apolo 11 fue la quinta mision tripulada del programa "Apolo" de los Estados Unidos. La tripulación del Apolo 11 estaba constituida por el comandante de la misión Neil A. Armstrong; Edwin E. Aldrin Jr., piloto del LEM y apodado Buzz; y Michael Collins, piloto del módulo de mando.  La misión fue un hito decisivo de la NASA contra el programa espacial de la Unión Soviética durante la carrera espacial y está considerada como uno de los momentos más significativos de la humanidad.
                    </p>    
                </TextBox>
            </div>
            <div className='img-item3'>
                <ImageBox>
                    <img src="https://content.nationalgeographic.com.es/medio/2016/07/20/apolo-bandera-astronautas_2701a04d.jpg"/>
                </ImageBox>
            </div>
        </div>
    )
}