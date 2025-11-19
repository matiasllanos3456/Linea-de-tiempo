import {TextBox} from '../components/TextBox.jsx';
import { ImageBox } from '../components/ImageBox.jsx';
import './stylesPage2.css';

export const Page5 = () => {

    return <div class='flex-container'>
        <TextBox>
            <h2>1700</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, iusto assumenda sit tempora officia non eligendi beatae nam veniam tenetur expedita neque. A cumque nesciunt aut ipsum pariatur quaerat odio.
            </p>
        </TextBox>
        <ImageBox>
            <h3>Imagen</h3>
            <img src="https://acdn-us.mitiendanube.com/stores/003/656/783/products/mi81525-1-cb1dfc297e86150a7617369477071736-1024-1024.webp"/>
        </ImageBox>
    </div>
}