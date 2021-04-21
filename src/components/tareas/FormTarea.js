import React, { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';

import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';

const FormTarea = () => {
    //extraer si un proyecto esta activo
    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    //obtener la funcion del context de tarea state
    const tareasContext = useContext(tareaContext);
    const { 
        tareaSeleccionada, 
        errortarea, 
        agregarTarea, 
        validarTarea, 
        obtenerTareas,
        actualizarTarea,
        limpiarTarea

    } = tareasContext;
    //effect que detecta si hay una tarea seleccionada
    useEffect(() => {
        if(tareaSeleccionada !== null){
            guardarTarea(tareaSeleccionada);
        }
        else{
            guardarTarea({
                nombre: ''
            })
        }
    }, [tareaSeleccionada])

    //state del formulario
    const [tarea, guardarTarea] = useState({
        nombre: ''
    })

    //extraer el nombre del proyecto
    const { nombre } = tarea;

    //si no hay proyecto seleccionado
    if(!proyecto) return null;

    //array destructuring
    const [ proyectoActual ] = proyecto;

    //leer los valores del formulario
    const handleChange = e => {
        guardarTarea({
            ...tarea,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()

        //validar 
        if(nombre.trim() === ""){
            validarTarea();
            return;
        }

        //Revisar su es edicion o si es nueva tarea
        if(tareaSeleccionada == null){
            //tara nueva
            //agregar una nueva tarea al state de tareas
            tarea.proyecto = proyectoActual._id;
            // tarea.estado = false;
            agregarTarea(tarea);
        }
        else{
            //actualizar tarea existente
            actualizarTarea(tarea);

            //eilimina tarea seleccionada osea lo limpia
            limpiarTarea();
        }

        //obtener y filtrar las tareas del proyecto actual
        obtenerTareas(proyectoActual.id);

        //reiniciar el form
        guardarTarea({
            nombre: ''
        })
    }

    return(
        <div className="formulario">
            <form   
                onSubmit={onSubmit}
            >
                <div className="contenedor-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Nombre Tarea..."
                        name="nombre"
                        value={nombre}
                        onChange={handleChange}
                    />
                </div>

                <div className="contenedor-input">
                    <input
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        value={tareaSeleccionada ? 'Editar Tarea' : 'Agregar Tarea'}
                    />
                </div>

            </form>
            {errortarea ? <p className="mensaje error">El nombre de la tarea es obligatorio</p> : null}
        </div>
    );
};

export default FormTarea;