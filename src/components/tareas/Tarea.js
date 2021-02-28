import React from 'react';
import { useContext } from 'react/cjs/react.development';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';


const Tarea = ({tarea}) => {
    //obtener la funcoin del context de tarea
    const tareasContext = useContext(tareaContext);
    const { eliminarTarea, obtenerTareas, cambiarEstadoTarea, guardarTareaActual } = tareasContext;

    //extraer si un proyectoe esta activo
    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    //extraer el proyecto
    const [proyectoActual] = proyecto;

    //funcion que se ejecuta cuando el usuario presiona el boton de eliminar tarea
    const tareaEliminar = id => {
        eliminarTarea(id);
        obtenerTareas(proyectoActual.id);
    }

    //funcoin que modifica el estado de las tareas
    const cambiarEstado = (tarea) => {
        if(tarea.estado){
            tarea.estado = false;
        }
        else{
            tarea.estado = true;
        }
        cambiarEstadoTarea(tarea);
    };

    //agrega una tare actual cuando el usuario desea editarla
    const seleccionarTarea = (tarea) =>{
        guardarTareaActual(tarea);
    };


    return(
        <li className="tarea sombra">
            <p>{tarea.nombre}</p>

        <div className="estado">
            {tarea.estado
                ?(
                    <button
                        type="button"
                        className="completo"
                        onClick={() => cambiarEstado(tarea)}
                    >Completo</button>
                )

                :(
                    <button
                        type="button"
                        className="incompleto"
                        onClick={() => cambiarEstado(tarea)}
                    >Incompleto</button>
                )
            }
        </div>

        <div className="acciones">
            <button
                type="button"
                className="btn btn-primario"
                onClick={() => seleccionarTarea(tarea)}
            >Editar</button>

            <button
                type="button"
                className="btn btn-secundario"
                onClick={() => tareaEliminar(tarea.id)}
            >Eliminar</button>
        </div>

        </li>

    )
};

export default Tarea;