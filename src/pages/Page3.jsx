import {TextBox} from '../components/TextBox.jsx';
import { ImageBox } from '../components/ImageBox.jsx';
import './stylesPage2.css';

export const Page3 = () => {

    return (
        <div className='grid-container'>
            {/* Se ordenaran los cuadros con css grid */}
            <div className='text-item1'>
                <TextBox>
                    <h2>2000</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem repellat reprehenderit laboriosam necessitatibus molestiae unde at deserunt eius distinctio autem, ipsam cupiditate amet quam, quasi perferendis quia iste! Soluta, illo.
                    </p>    
                </TextBox>
            </div>
            <div className='img-item1'>
                <ImageBox>
                    <img src="https://acdn-us.mitiendanube.com/stores/003/656/783/products/mi81525-1-cb1dfc297e86150a7617369477071736-1024-1024.webp"/>
                </ImageBox>
            </div>
            {/* Fila 2 */}
            <div className='img-item2'>
                <ImageBox>
                    <img src="https://acdn-us.mitiendanube.com/stores/003/656/783/products/mi81525-1-cb1dfc297e86150a7617369477071736-1024-1024.webp"/>
                </ImageBox>
            </div>
            <div className='text-item2'>
                <TextBox>
                    <h2>lol</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem repellat reprehenderit laboriosam necessitatibus molestiae unde at deserunt eius distinctio autem, ipsam cupiditate amet quam, quasi perferendis quia iste! Soluta, illo.
                    </p>    
                </TextBox>
            </div>
            {/* Fila 3 */}
            <div className='text-item3'>
                <TextBox>
                    <h2>xd</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem repellat reprehenderit laboriosam necessitatibus molestiae unde at deserunt eius distinctio autem, ipsam cupiditate amet quam, quasi perferendis quia iste! Soluta, illo.
                    </p>    
                </TextBox>
            </div>
            <div className='img-item3'>
                <ImageBox>
                    <img src="https://acdn-us.mitiendanube.com/stores/003/656/783/products/mi81525-1-cb1dfc297e86150a7617369477071736-1024-1024.webp"/>
                </ImageBox>
            </div>
        </div>
    )
}