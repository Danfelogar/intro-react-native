import { useUsuarios } from '../hooks/useUsuarios';
import {  Usuario } from '../interfaces/reqRes';


export const Usuarios = () => {

    const { usuarios,paginaSiguiente,paginaAnterior } = useUsuarios();

    const renderItem = (usuario: Usuario) => {
        return(
            <tr key={usuario.id}>
                <td><img style={{width:35, borderRadius:50}} src={usuario.avatar} alt="avatar"/></td>
                <td>{usuario.first_name} {usuario.last_name}</td>
                <td>{usuario.email}</td>
            </tr>
        )
    }

    return (
        <>
            <h3>Usuarios:</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usuarios.map(usuario => renderItem(usuario))
                    }
                </tbody>
            </table>
            <button
            className="btn btn-primary"
            onClick={paginaAnterior}
            >
                Amterior
            </button>
            &nbsp;
            <button
            className="btn btn-primary"
            onClick={paginaSiguiente}
            >
                Siguiente
            </button>
        </>
    )
}
