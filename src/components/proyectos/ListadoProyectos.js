/**tenemos ya todo disponible con useContext, solo tenemos que declarar ese hook para que podamos
 * utilizar todo lo que tiene proyectoState, en la linea 13 lo hacemos
 */
import React from 'react';
import { useEffect } from 'react';


import { useContext } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import proyectoContext from '../../context/proyectos/proyectoContext';
import Proyecto from './Proyecto';


const ListadoProyectos = () => {
    //estraer proyectos de state incial
    const proyectosContext = useContext(proyectoContext);
    const {proyectos, obtenerProyectos} = proyectosContext;


    //obtener proyectos cuando carga el componente
    useEffect(() => {
        obtenerProyectos();
        //eslint-disable-next-line
    }, [])

    //revisar si proyectos tiene contenido
    if(proyectos.length === 0) return <p>No hay Proyectos, Comienza Creando Uno</p>;

    return(
        <ul className="listado-proyectos">
            <TransitionGroup>
                {proyectos.map(proyecto => (
                    <CSSTransition
                        key={proyecto.id}
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