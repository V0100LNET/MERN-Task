import React, { Fragment } from 'react';
import { useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import Tarea from "../tareas/Tarea";

const ListadoTareas = () => {
    //extraer proyectos del state incial
    const proyectosContext = useContext(proyectoContext);
    const { proyecto, eliminarProyecto } = proyectosContext;

    //si no hay proyecto seleccionado
    if(!proyecto) return <h2>Selecciona un Proyecto</h2>

    //array destructurgin para extraer el proyecto actual
    const [ proyectoActual ] = proyecto;

    const tareasProyecto = [
        {nombre: 'Elegir Plataforma', estado: true},
        {nombre: 'Elegir Colores', estado: false},
        {nombre: 'Elegir Plataforma de pagos', estado: false},
        {nombre: 'Elegir Hosting', estado: true}
    ];

    //eliminar un proyecto
    const onClickEliminar = () => {
        eliminarProyecto(proyectoActual.id);
    }
    return(
        <Fragment>
            <h2>Proyecto: {proyectoActual.nombre}</h2>
            <ul className="listado-tareas">
                {tareasProyecto.length === 0
                    ? (<li className="tarea"><p>No hay tareas</p></li>)
                    : tareasProyecto.map(tarea => (
                        <Tarea
                            tarea={tarea}
                        />
                    ))
                }
            </ul>
            <button
                type="button"
                className="btn btn-eliminar"
                onClick={onClickEliminar}
            >Eliminar Proyecto &times;</button>
        </Fragment>
    );
};


export default ListadoTareas;