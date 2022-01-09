import { useState } from "react";

export const useCounter = ( inicial: number = 10 ) => {

    const [valor, setValor] = useState(inicial);

    const acumular = (n :number) => {
        setValor(valor + n)
    }

    return{
        valor,
        acumular,
    }
}
