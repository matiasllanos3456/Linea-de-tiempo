import {TextBox} from '../components/TextBox.jsx';
import { ImageBox } from '../components/ImageBox.jsx';
import './stylesPage2.css';

export const Page4 = () => {

    return <div class='flex-container'>
        <TextBox>
            <h2>1800</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, iusto assumenda sit tempora officia non eligendi beatae nam veniam tenetur expedita neque. A cumque nesciunt aut ipsum pariatur quaerat odio.
            </p>
        </TextBox>
        <ImageBox>
            <h3>Imagen</h3>
            <img src="https://p.turbosquid.com/ts-thumb/6X/qFbfqP/qCtVHNY5/minecraftskeleton3dmodel01/jpg/1458213136/600x600/fit_q87/0227fe619c75c62d718296d8492c4936d96a5919/minecraftskeleton3dmodel01.jpg"/>
        </ImageBox>
    </div>
}