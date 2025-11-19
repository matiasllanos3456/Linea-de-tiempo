import {TextBox} from '../components/TextBox.jsx';
import { ImageBox } from '../components/ImageBox.jsx';
import './stylesPage2.css';

export const Page3 = () => {

    return <div class='flex-container'>
        <TextBox>
            <h2>1900</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, iusto assumenda sit tempora officia non eligendi beatae nam veniam tenetur expedita neque. A cumque nesciunt aut ipsum pariatur quaerat odio.
            </p>
        </TextBox>
        <ImageBox>
            <h3>Imagen</h3>
            <img src="https://preview.free3d.com/img/2016/03/1875487412218496644/7dkv76j9.jpg"/>
        </ImageBox>
    </div>
}