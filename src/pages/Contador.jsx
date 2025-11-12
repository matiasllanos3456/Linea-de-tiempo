import { useState } from "react"

export const Contador = () => {

    // El contador va a partir en 0 y se declara una funcion para modificarlo
    const [sum, setSum] = useState(0);

    const Mas = () => {
        setSum(sum + 1);
    }
     const Menos = () => {
        setSum(sum - 1);
    }
    return (
        <div>
            <button onClick={Mas}>Sumar</button>
            <button onClick={Menos}>Restar</button>
            
            <h3>{sum}</h3>
        </div>
    )
}