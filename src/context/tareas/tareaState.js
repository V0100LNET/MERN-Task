import React from 'react'
import { useReducer } from 'react'
import TareaReducer from './tareaReducer'
import TareaContext from './tareaContext';
import { v4 as uuidv4 } from 'uuid';


import { 
    TAREAS_PROYECTO ,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    ESTADO_TAREA,
    TAREA_ACTUAL,    
    ACTUALIZAR_TAREA,
    LIMPIAR_TAREA
} from '../../types';

const TareaState = props => {
    const initialState = {
        tareas: [
            { id: 1, nombre: 'Elegir Plataforma', estado: true, proyectoId: 1},
            { id: 2, nombre: 'Elegir Colores', estado: false, proyectoId: 2},
            { id: 3, nombre: 'Elegir Plataforma de pagos', estado: false, proyectoId: 3},
            { id: 4, nombre: 'Elegir Hosting', estado: true, proyectoId: 4},
            { id: 5, nombre: 'Elegir Plataforma', estado: true, proyectoId: 1},
            { id: 6, nombre: 'Elegir Colores', estado: false, proyectoId: 2},
            { id: 7, nombre: 'Elegir Plataforma de pagos', estado: false, proyectoId: 3},
            { id: 8, nombre: 'Elegir Plataforma', estado: true, proyectoId: 1},
            { id: 9, nombre: 'Elegir Colores', estado: false, proyectoId: 4},
            { id: 10, nombre: 'Elegir Plataforma de pagos', estado: false, proyectoId: 3},
        ],
        tareasproyecto: null,
        errortarea: false,
        tareaSeleccionada: null
    }

    //crear disptach y state
    const [state, dispatch] = useReducer(TareaReducer, initialState);

    //crear las funciones

    //obtener las tareas de un proyecto
    const obtenerTareas = proyectoid => {
        dispatch({
            type: TAREAS_PROYECTO,
            payload: proyectoid
        })
    };

    //agregar una tarea al proyecto seleccionado
    const agregarTarea = tarea => {
        tarea.id = uuidv4();
        dispatch({
            type: AGREGAR_TAREA,
            payload: tarea
        })
    }

    //Vvalida y muestra un error
    const validarTarea = () => {
        dispatch({
            type: VALIDAR_TAREA
        })
    }

    //eliminar tarea por su id
    const eliminarTarea = id => {
        dispatch({
            type: ELIMINAR_TAREA,
            payload: id
        })
    };

    //cambia el estado de cada tarea
    const cambiarEstadoTarea = (tarea) => {
        dispatch({
            type: ESTADO_TAREA,
            payload: tarea
        })
    };

    //Estrae una tarea para editarla
    const guardarTareaActual = tarea => {
        dispatch({
            type: TAREA_ACTUAL,
            payload: tarea
        })
    }

    //Eedita o modifica una tarea
    const actualizarTarea = (tarea) => {
        dispatch({
            type: ACTUALIZAR_TAREA,
            payload: tarea
        })
    };

    //elimina la tarea seleccionada
    const limpiarTarea = () => {
        dispatch({
            type: LIMPIAR_TAREA
        })
    };

    return(
        <TareaContext.Provider
            value={{
                tareas: state.tareas,
                tareasproyecto: state.tareasproyecto,
                errortarea: state.errortarea,
                tareaSeleccionada: state.tareaSeleccionada,
                obtenerTareas,
                agregarTarea,
                validarTarea,
                eliminarTarea,
                cambiarEstadoTarea,
                guardarTareaActual,
                actualizarTarea,
                limpiarTarea
            }}
        >
            {props.children}
        </TareaContext.Provider>
    )
}


export default TareaState;