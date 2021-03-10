import React, { useReducer } from 'react';
import AuthContext from './authContext';
import AuthReducer from './authReducer';


const AuthState = props => {
    const initialState = {
        token_1: localStorage.getItem('token_1'),
        autenticado: null,
        usuario: null,
        mensaje: null
    }

    const [state, dispatch] = useReducer(AuthReducer, initialState);
    
    //las funciones

    
    return(
        <AuthContext.Provider
            value={{
                token: state.token,
                autenticado: state.autenticado,
                usuario: state.usuario,
                mensaje: state.mensaje
            }}
        >{props.children}


        </AuthContext.Provider>
    );
}


export default AuthState;


