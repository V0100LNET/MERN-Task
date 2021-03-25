import { REGISTRO_ERROR, 
        REGISTRO_EXITOSO,
        LOGIN_ERROR, 
        OBTENER_USUARIO, 
        LOGIN_EXITOSO,
        CERRAR_SESION
} from "../../types";


const fn = (state, action) => {
    switch (action.type) {
        case REGISTRO_EXITOSO:
        case LOGIN_EXITOSO: 
            localStorage.setItem('token_1', action.payload.token)
            return{
                ...state,
                autenticado: true,
                mensaje: null,
                cargando: false
            }

        case OBTENER_USUARIO:
            return{
                ...state,
                autenticado: true,
                usuario: action.payload,
                cargando: false
            }
        
        case CERRAR_SESION:
        case LOGIN_ERROR:
        case REGISTRO_ERROR:
            localStorage.removeItem('token_1');
            return{
                ...state,
                usuario: null,
                token_1: null,
                autenticado: null,
                mensaje: action.payload,
                cargando: false
            }

        default:
            return state;
    }
}

export default fn;