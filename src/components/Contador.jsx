import {useState} from "react";

function Contador (){

    const [contador,setcontador] = useState(0)

    const incrementar = () => {
        setcontador(contador+1)

    }

    const decremento = () => {
        setcontador(contador-1)
    }

    return(

        <>
        <h2>Contador</h2>
        <p>Valor : {contador}</p>
        <button onClick={incrementar}>Incrementar</button>
        <button onClick={decremento}>Decrementar</button>
        </>

    )
}

export default Contador