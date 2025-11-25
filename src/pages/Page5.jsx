import {TextBox} from '../components/TextBox.jsx';
import { ImageBox } from '../components/ImageBox.jsx';
import './stylesPage2.css';

export const Page5 = () => {

    return (
        <div className='grid-container'>
            {/* Se ordenaran los cuadros con css grid */}
            <div className='text-item1'>
                <TextBox>
                    <h2>Revolución industrial</h2>
                    <p>
                        Iniciada en 1760 en el Reino de Gran Bretaña, se extendió por Europa y Estados Unidos. La introducción de la máquina de vapor y otras tecnologías permitió la mecanización de algunos procesos productivos. Esto llevó a la aparición de la fábrica urbana como espacio de trabajo y una nueva organización laboral. Entre sus causas esta el aumento de productividad agrícola, el desplazamiento de campesinos a las ciudades, la creciente influencia política de la burguesía, etc. Todo esto benefició significativamente al Reino Unido que estableció colonias y centros comerciales en América del Norte, el Caribe y la India.
                    </p>    
                </TextBox>
            </div>
            <div className='img-item1'>
                <ImageBox>
                    <img src="https://static.nationalgeographicla.com/files/styles/image_3200/public/industrial-landscape-by-kregczy-17318.png.webp?w=760&h=497"/>
                </ImageBox>
            </div>
            {/* Fila 2 */}
            <div className='img-item2'>
                <ImageBox>
                    <img src="https://concepto.de/wp-content/uploads/2024/05/revolucion-cientifica.jpg"/>
                </ImageBox>
            </div>
            <div className='text-item2'>
                <TextBox>
                    <h2>La ilustración</h2>
                    <p>
                        La Ilustración fue un movimiento cultural e intelectual surgido en Europa en los siglos XVII y XVIII. El movimiento ilustrado sostenía que el uso de la razón debía ser la base del pensamiento y que a partir de la observación se podía conocer la realidad “de manera clara”. Estas ideas inspiraron grandes cambios en la cultura, la política, la economía y la sociedad de la época. El pensamiento ilustrado cuestionaba todos los aspectos de la realidad; en especial, aquellos que se presentaban como verdades absolutas, los dogmas religiosos y los principios que organizaban la sociedad y la naturaleza.
                    </p>    
                </TextBox>
            </div>
            {/* Fila 3 */}
            <div className='text-item3'>
                <TextBox>
                    <h2>Revolución francesa</h2>
                    <p>
                        Fue un proceso histórico que atravesó Francia entre 1789 y 1799 a partir del cual se transformó la política, la sociedad y la economía. Fue la primera revolución liberal que derrocó a la monarquía y disolvió los privilegios de la sociedad estamental del Antiguo Régimen. Esta revolución estuvo protagonizada por un conjunto social integrado por la burguesía, el campesinado, los artesanos, los profesionales de oficio y otros trabajadores urbanos, y el bajo clero. A través de una serie de eventos, este conjunto social logró derrocar a la monarquía del rey Luis XVI e imponer un gobierno revolucionario.
                    </p>    
                </TextBox>
            </div>
            <div className='img-item3'>
                <ImageBox>
                    <img src="https://www.laizquierdadiario.com/IMG/logo/revolucion-francesa.jpg"/>
                </ImageBox>
            </div>
        </div>
    )
}