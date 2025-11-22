import {TextBox} from '../components/TextBox.jsx';
import { ImageBox } from '../components/ImageBox.jsx';
import './stylesPage2.css';

export const Page2 = () => {

    return (
        <div className='grid-container'>
            {/* Se ordenaran los cuadros con css grid */}
            <div className='text-item1'>
                <TextBox>
                    <h2>Pandemia del covid-19</h2>
                    <p>
                        A finales de 2019 la humanidad enfrentaria una pandemia mundial. El covid-19 es una enfermedad infecciosa causada por el SARS-CoV-2. ​El total de fallecidos hasta 2024 según (Hopkins, 2024) es de 6.881.955 de fallecidos, así mismo, según (Hopkins, 2024), a fecha de 2023, se habían administrado un total de 13.338.833.198 vacunas. El virus puede producir síntomas que incluyen fiebre, tos, disnea (dificultad respiratoria), mialgia (dolor muscular) y fatiga. En mayo de 2023, la OMS declaró que COVID-19 no era más una “Emergencia de Salud Pública de Importancia Internacional (PHEIC)”.
                    </p>    
                </TextBox>
            </div>
            <div className='img-item1'>
                <ImageBox>
                    <img src="https://www.paho.org/sites/default/files/2023-08/covid-19-variants.jpg"/>
                </ImageBox>
            </div>
            {/* Fila 2 */}
            <div className='img-item2'>
                <ImageBox>
                    <img src="https://vitriko.eu/wp-content/uploads/2023/02/inteligencia-artificial.jpg.webp"/>
                </ImageBox>
            </div>
            <div className='text-item2'>
                <TextBox>
                    <h2>Avances de la IA</h2>
                    <p>
                        En el ultimo siglo los avances en inteligencia artificial se centran en crear modelos de lenguaje más potentes, mejorar la visión por computadora, automatizar procesos complejos y la toma de decisiones basada en datos. La IA generativa, ejemplificada por chatbots y herramientas de creación de contenido, ha revolucionado la forma en que las máquinas interactúan con las personas, teniendo relevancia en multiples ambitos de nuestra vida diaria. También hay avances en áreas como la robótica avanzada, la computación cuántica para resolver problemas complejos y el uso de IA para fines de desarrollo social y de salud. 
                    </p>    
                </TextBox>
            </div>
            {/* Fila 3 */}
            <div className='text-item3'>
                <TextBox>
                    <h2>Guerra entre Rusia y Ucrania</h2>
                    <p>
                        Iniciada el 24 de febrero de 2022, constituye una escalada de la guerra ruso-ucraniana que comenzó tras los sucesos del Euromaidán en 2014. Se trata del mayor conflicto militar convencional en Europa desde la Segunda Guerra Mundial. La cifra precisa de víctimas se desconoce; se estima que hasta mediados de 2025, había causado la muerte de más de 15 000 civiles ucranianos y más de 200 000 soldados entre ambos bandos. Entre las posibles causas del comienzo del conflico está  el acercamiento de Ucrania a Occidente (Unión Europea y OTAN), que Rusia ve como una amenaza a su seguridad, y las tensiones internas de Ucrania derivadas de un conflicto de identidades e intereses geopolíticos.
                    </p>    
                </TextBox>
            </div>
            <div className='img-item3'>
                <ImageBox>
                    <img src="https://www.revistaanfibia.com/wp-content/uploads/2022/02/Rusia_Ucrania_01.jpg"/>
                </ImageBox>
            </div>
        </div>
    )
}