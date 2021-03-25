import proyectoContext from "./proyectoContext";
import ProyectoReducer from './proyectoReducer';
import { useReducer } from 'react';
import React from 'react';
import { 
    FORMULARIO_PROYECTO,
    OBTENER_PROYECTOS,
    AGREGAR_PROYECTO,
    VALIDAR_FORMULARIO,
    PROYECTO_ACTUAL,
    ELIMINAR_PROYECTO,
    PROYECTO_ERROR
} from "../../types";
import clienteAxios from "../../config/axios";


const ProyectoState = props => {
    const initialState = {
        proyectos: [],
        formulario: false,
        errorformulario: false,
        proyecto: null,
        mensaje: null
    }

    //dispatchh para ejecutar las acciones o lo que es lo mismo
    //ejecuta los diferentes types que tenemos en el index
    const [state, dispatch] = useReducer(ProyectoReducer, initialState);

    //serie de funciOnes para el CRUD

    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    };

    //obtener los proyectos
    const obtenerProyectos = async() => {
        try {
            const resultado = await clienteAxios.get('api/proyectos');
            dispatch({
                type: OBTENER_PROYECTOS,
                payload: resultado.data.proyectos
            })
        } catch (error) {
            console.log(error);
        }
    };

    //Agregar nuevo proyecto
    const agregarProyecto = async proyecto => {

        try {
            const resultado = await clienteAxios.post('/api/proyectos', proyecto);
            console.log(resultado);
            //insertar el proyecto en el state
            dispatch({
                type: AGREGAR_PROYECTO,
                payload: resultado.data
            })
        } catch (error) {
            console.log(error);
        }
    };

    //validar formulario por errores
    const mostrarError = () => {
        dispatch({
            type: VALIDAR_FORMULARIO
        })
    }

    //selecciona el proyecto que el usuario dio clicl
    const proyectoActual = proyectoId => {
        dispatch({
            type: PROYECTO_ACTUAL,
            payload: proyectoId
        })
    };

    //elimnina un proyecto
    const eliminarProyecto = async proyectoId => {
       try {
           await clienteAxios.delete(`/api/proyectos/${proyectoId}`);
           dispatch({
                type: ELIMINAR_PROYECTO,
                payload: proyectoId
            })
       } catch (error) {
            const alerta = {
                msg: 'Hubo un Error',
                categoria: 'alerta-error'
            }

           dispatch({
               type: PROYECTO_ERROR,
               payload: alerta
           })
       }
    };

    return(
        <proyectoContext.Provider  
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                errorformulario: state.errorformulario,
                proyecto: state.proyecto,
                mensaje: state.mensaje,
                mostrarFormulario,
                obtenerProyectos,
                agregarProyecto,
                mostrarError,
                proyectoActual,
                eliminarProyecto
            }}
        >
            {props.children}

        </proyectoContext.Provider>
    );
}

export default ProyectoState;