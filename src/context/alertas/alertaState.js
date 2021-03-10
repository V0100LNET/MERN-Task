import { useReducer } from "react";
import alertaReducer from "./alertaReducer"
import alertaContext from "./alertaContext";
import { MOSTRAR_ALERTA, OCULTAR_ALERTA } from "../../types";



const AlertaState = props => {
    const initialState = {
        alerta: null
    }

    const [state, dispatch] = useReducer(alertaReducer, initialState);

    //funciones
    const mostrarAlerta = (msg, categoria) => {
        dispatch({
            type: MOSTRAR_ALERTA,
            payload: {
                msg: msg,
                categoria
            }
        });

        //despues de 5s limpia lo que es el error
        setTimeout(() => {
            dispatch({
                type: OCULTAR_ALERTA
            })
        },3000)
    }

    
    return(
        <alertaContext.Provider
            value={{
                alerta: state.alerta,
                mostrarAlerta
            }}
        >
            {props.children}

        </alertaContext.Provider>
    );
}


export default AlertaState;