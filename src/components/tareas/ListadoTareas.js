import React, { Fragment } from 'react';
import { useContext } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';
import Tarea from "../tareas/Tarea";


const ListadoTareas = () => {
    //extraer proyectos del state incial
    const proyectosContext = useContext(proyectoContext);
    const { proyecto, eliminarProyecto } = proyectosContext;

    //estraer las tareas del proyecto
    const tareasContext = useContext(tareaContext);
    const { tareasproyecto } = tareasContext;

    //si no hay proyecto seleccionado
    if(!proyecto) return <h2>Selecciona un Proyecto</h2>

    //array destructurgin para extraer el proyecto actual
    const [ proyectoActual ] = proyecto;

    // const tareasProyecto = [];

    //eliminar un proyecto
    const onClickEliminar = () => {
        eliminarProyecto(proyectoActual._id);
    }
    return(
        <Fragment>
            <h2>Proyecto: {proyectoActual.nombre}</h2>
            <ul className="listado-tareas">
                {tareasproyecto.length === 0
                    ? (<li className="tarea"><p>No hay tareas</p></li>)
                    : 
                    <TransitionGroup>
                        {tareasproyecto.map(tarea => (
                            <CSSTransition 
                                key={tarea.id}
                                timeout={200}
                                classNames="tarea"
                            >
                                <Tarea tarea={tarea}/>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
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