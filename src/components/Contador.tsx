import { useState } from "react";


export const Contador = () => {

    const [valor, setValor] = useState(0);

    const acumular = (n :number) => {
        setValor(valor + n)
    }

    return (
        <>
            <h3>Contador: <small>{valor}</small></h3>

            <button
                className="btn btn-primary"
                onClick={() => acumular(+1)}
            >
                +1
            </button>
            &nbsp;
            &nbsp;
            <button
                className="btn btn-primary"
                onClick={() => acumular(-1)}
            >
                -1
            </button>
        </>
    )
}
