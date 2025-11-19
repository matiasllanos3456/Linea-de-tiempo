import {TextBox} from '../components/TextBox.jsx';
import { ImageBox } from '../components/ImageBox.jsx';
import './stylesPage2.css';

export const Page2 = () => {

    return <div class='flex-container'>
        <TextBox>
            <h2>2000</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem repellat reprehenderit laboriosam necessitatibus molestiae unde at deserunt eius distinctio autem, ipsam cupiditate amet quam, quasi perferendis quia iste! Soluta, illo.
            </p>    
        </TextBox>
        <ImageBox>
            <h3>Imagen</h3>
            <img src="https://acdn-us.mitiendanube.com/stores/003/656/783/products/mi81525-1-cb1dfc297e86150a7617369477071736-1024-1024.webp"/>
        </ImageBox>
    </div>
}