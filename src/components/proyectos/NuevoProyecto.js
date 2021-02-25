import React, { Fragment, useState } from 'react';
import { useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';


const NuevoProyecto = () => {
    //obtener el state del formu;ario
    /**con use contexto podemos acceder a todas las funcionaes que necesitemos sin la necesidad
     * de pasar props componente por componente, entonces solo con esa linea de codigo 
     * podemos consumir todo lo que esta en proyectoState 
     */
    const proyectosContext = useContext(proyectoContext);
    const { formulario, errorformulario , mostrarFormulario, agregarProyecto, mostrarError } = proyectosContext;

     //state para el proyecto
     const [proyecto, guardarProyecto] = useState({
        nombre: ''
    });

    //lee los contenidos del input
    const onChangeProyecto = e => {
        guardarProyecto({
            ...proyecto,
            [e.target.name] : e.target.value
        });
    };

    //estraer nombre del proyecto
    const {nombre} = proyecto;

    //cuando el usario envia el form
    const onSubmitProyecto = (e) => {
        e.preventDefault();

        //Validar el proyecto
        if(nombre === ""){
            mostrarError();
            return;
        }

        //agregar al state
        agregarProyecto(proyecto);

        //reinciar el form
        guardarProyecto({
            nombre: ''
        })
    };

    return(
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
                onClick={mostrarFormulario}
            >Nuevo Proyecto</button>

            {
                formulario
                ?(
                    <form
                        className="formulario-nuevo-proyecto"
                        onSubmit={onSubmitProyecto}
                    >
                        <input
                            type="text"
                            className="input-text"
                            placeholder="Nombre Proyecto"
                            name="nombre"
                            value={nombre}
                            onChange={onChangeProyecto}
                        />

                        <input
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Agregar Proyecto"
                        />  
                    </form>
                )
                : null
            }
            {errorformulario ? <p className="mensaje error">El nombre es Obligatorio</p> : null }
        </Fragment>
    );
};

export default NuevoProyecto;