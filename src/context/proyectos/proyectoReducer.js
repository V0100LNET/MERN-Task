/**la forma en como se estan comunicando el archivo proyectoReducer es de la siguiente forma
 * en el archivo proyectoState en la linea #18 hay una funcion que se llama mostrarFormulario
 * cunado se manda a llamar a esa funcion que es cuando se hace click, 
 * se manda a llamar el TYPE FORMULARIO_PROYECTO se mapea esa funcion aqui ya que son iguales
 * asi es como se mapean cuando detectan que son iguales se manda a llamar una funcion
 * lo que ocurre es que se cambbia el state
 */

import { 
    FORMULARIO_PROYECTO, 
    OBTENER_PROYECTOS,
    AGREGAR_PROYECTO,
    VALIDAR_FORMULARIO,
    PROYECTO_ACTUAL,
    ELIMINAR_PROYECTO,
} from "../../types";




export default (state, action) => {
    switch(action.type){
        case FORMULARIO_PROYECTO:
            return{
                ...state,
                formulario: true
            }
        
        case OBTENER_PROYECTOS:
            return{
                ...state,
                proyectos: action.payload
            }

        case AGREGAR_PROYECTO:
            return{
                ...state,
                proyectos: [...state.proyectos, action.payload],
                formulario: false,
                errorformulario: false
            }

        case VALIDAR_FORMULARIO:
            return{
                ...state,
                errorformulario: true
            }

        case PROYECTO_ACTUAL:
            return{
                ...state,
                proyecto: state.proyectos.filter(proyecto => proyecto.id === action.payload)
            }

        case ELIMINAR_PROYECTO:
            return{
                ...state,
                proyectos: state.proyectos.filter(proyecto => proyecto.id !== action.payload),
                proyecto: null
            }

        default:
            return state;
    }
}