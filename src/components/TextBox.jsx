import './StylesTextBox.css';
// Aquí se irá colocando la información
// Recibirá el texto como parametro y lo colocará dentro del div
// con los estilos correspondientes
export const TextBox = ({ children }) => {

    return <div class="Text-box">
        {children}
    </div>
}