import React, { useContext, useEffect } from 'react';
import AuthContext from '../../context/autenticacion/authContext';

const Barra = () => {
    //Extraer la informacion de atenticacion
    const authContext = useContext(AuthContext);
    const { usuario ,usuarioAutenticado, cerrarSesion } = authContext;
    useEffect(() => {
        usuarioAutenticado();
        //eslint-disable-next-line
    },[])

    return(
        <header className="app-header">
            {usuario ? <p className="nombre-usuario">Hola <span>{usuario.nombre}</span></p> : null}
            <nav className="nav-principal">
                {/* #! <- enlace que no apunta a nada */}
                <button
                    className="btn btn-blank cerrar-sesion close-sesion"
                    onClick={() => cerrarSesion()}
                >Cerrar Sesión</button>
            </nav>
        </header>
    );
};


export default Barra;