/**tenemos ya todo disponible con useContext, solo tenemos que declarar ese hook para que podamos
 * utilizar todo lo que tiene proyectoState, en la linea 13 lo hacemos
 */
import React from 'react';
import { useEffect } from 'react';


import { useContext } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import proyectoContext from '../../context/proyectos/proyectoContext';
import Proyecto from './Proyecto';
import AlertaContext from "../../context/alertas/alertaContext"


const ListadoProyectos = () => {
    //estraer proyectos de state incial
    const proyectosContext = useContext(proyectoContext);
    const {mensaje, proyectos, obtenerProyectos} = proyectosContext;

    const alertaContext = useContext(AlertaContext);
    const { alerta, mostrarAlerta } = alertaContext;

    //obtener proyectos cuando carga el componente
    useEffect(() => {
        //si hay un error
        if(mensaje){
            mostrarAlerta(mensaje.msg, mensaje.categoria);
        }

        obtenerProyectos();
        //eslint-disable-next-line
    }, [mensaje])

    //revisar si proyectos tiene contenido
    if(proyectos.length === 0) return <p>No hay Proyectos, Comienza Creando Uno</p>;

    return(
        <ul className="listado-proyectos">
            {alerta ? (<div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>) : null}
            <TransitionGroup>
                {proyectos.map(proyecto => (
                    <CSSTransition
                        key={proyecto._id}
                        timeout={200}
                        classNames="proyecto"
                    >
                        <Proyecto
                            proyecto={proyecto}
                        />
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </ul>
    );
};

export default ListadoProyectos;