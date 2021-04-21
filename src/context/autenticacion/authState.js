import React, { useReducer } from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';
import tokenAuth from '../../config/token';

import { 
    REGISTRO_ERROR, 
    REGISTRO_EXITOSO, 
    LOGIN_ERROR, 
    OBTENER_USUARIO, 
    LOGIN_EXITOSO ,
    CERRAR_SESION
} from '../../types';
import clienteAxios from '../../config/axios';

const AuthState = props => {
    const initialState = {
        token_1: localStorage.getItem('token_1'),
        autenticado: null,
        usuario: null,
        mensaje: null,
        cargando: true
    }

    const [state, dispatch] = useReducer(AuthReducer, initialState);
    
    const registrarUsuario = async datos => {
        try {
            const respuesta = await clienteAxios.post('/api/usuarios', datos);
            // console.log(respuesta.data);

            dispatch({
                type: REGISTRO_EXITOSO,
                payload: respuesta.data
            })

            //obtener el usario una vez que el registro ha sido exitoso
            usuarioAutenticado(); 
        } catch (error) {
            console.log(error.response.data.msg);
            const alerta = {
                msg: error.response.data.msg,
                categoria: 'alerta-error'
            }

            dispatch({
                type: REGISTRO_ERROR,
                payload: alerta
            })
        }
    }

    //retorna el usario autenticado
    const usuarioAutenticado = async () => {
        const token = localStorage.getItem('token_1');
        if(token){
            tokenAuth(token); 
        }

        try {
            const respuesta = await clienteAxios.get('/api/auth');

            dispatch({
                type: OBTENER_USUARIO,
                payload: respuesta.data.usuario
            })

        } catch (error) {
            console.log(error.response);
            dispatch({
                type: LOGIN_ERROR
            })
        }
    }

    //Cunado el usuario incia sesion
    const iniciarSesion = async datos => {
        try {
            const respuesta = await clienteAxios.post('/api/auth', datos);
            // console.log(respuesta);
            dispatch({
                type: LOGIN_EXITOSO,
                payload: respuesta.data
            });

            //obtener el usuaior
            usuarioAutenticado();
        } catch (error) {
            console.log(error.response.data.msg);
            const alerta = {
                msg: error.response.data.msg,
                categoria: 'alerta-error'
            }

            dispatch({
                type: LOGIN_ERROR,
                payload: alerta
            })

            //Obtener el usuario
            usuarioAutenticado();
        }
    }

    //close sesion
    const cerrarSesion = () => {
        dispatch({
            type: CERRAR_SESION
        })
    };

    return(
        <AuthContext.Provider
            value={{
                token: state.token,
                autenticado: state.autenticado,
                usuario: state.usuario,
                mensaje: state.mensaje,
                cargando: state.cargando,
                registrarUsuario,
                iniciarSesion,
                usuarioAutenticado,
                cerrarSesion,
            }}
        >{props.children}


        </AuthContext.Provider>
    );
}


export default AuthState;


