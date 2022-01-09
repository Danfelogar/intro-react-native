export const TiposBasicos = () => {

    const nombre: string = 'Daniel';
    const  edad: number = 35;
    const estaActivo: boolean = false;

    const poderes: string[] = []; //'Velocidades','Volar','Respiraren el  agua'
    // si quiero tener arreglos de mas de una variable
    // const poderes: (string|number)[] = [];

    return (
        <>
            <h3>Tipos Basicos</h3>
            { nombre },{ edad }.{ (estaActivo) ? 'activo' : 'no activo' }
            <br />
            { poderes.join(', ') }
        </>
    )
}
