import React from 'react'
import { useReducer } from 'react'
import TareaReducer from './tareaReducer'
import TareaContext from './tareaContext';

import { 
    TAREAS_PROYECTO 
} from '../../types';

const TareaState = props => {
    const initialState = {
        tareas: [
            {nombre: 'Elegir Plataforma', estado: true, proyectoId: 1},
            {nombre: 'Elegir Colores', estado: false, proyectoId: 2},
            {nombre: 'Elegir Plataforma de pagos', estado: false, proyectoId: 3},
            {nombre: 'Elegir Hosting', estado: true, proyectoId: 4},
            {nombre: 'Elegir Plataforma', estado: true, proyectoId: 1},
            {nombre: 'Elegir Colores', estado: false, proyectoId: 2},
            {nombre: 'Elegir Plataforma de pagos', estado: false, proyectoId: 3},
            {nombre: 'Elegir Plataforma', estado: true, proyectoId: 1},
            {nombre: 'Elegir Colores', estado: false, proyectoId: 4},
            {nombre: 'Elegir Plataforma de pagos', estado: false, proyectoId: 3},
        ],
        tareasproyecto: null
    }

    //crear disptach y state
    const [state, disptach] = useReducer(TareaReducer, initialState);

    //crear las funciones

    //obtener las tareas de un proyecto
    const obtenerTareas = proyectoid => {
        disptach({
            type: TAREAS_PROYECTO,
            payload: proyectoid
        })
    };

    return(
        <TareaContext.Provider
            value={{
                tareas: state.tareas,
                tareasproyecto: state.tareasproyecto,
                obtenerTareas
            }}
        >
            {props.children}
        </TareaContext.Provider>
    )
}


export default TareaState;