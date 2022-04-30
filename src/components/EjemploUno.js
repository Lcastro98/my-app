import React, { Fragment, useState } from 'react';

import { useForm } from 'react-hook-form';

const EjemploUno = () => {

    const {register, formState: { errors }, handleSubmit} = useForm();

    const [Entradas, setEntradas] = useState([]);

    const onSubmit = (data, e) => {
        console.log(data)
        setEntradas([
            ...Entradas,
            data
        ])
        e.target.reset()
    }

    return ( 
        <Fragment>
            <h1>Ejemplo #1</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    {...register("titulo", {
                            required: {value: true, message: 'Campo obligatorio'},
                            minLength: {value: 2, message: 'Mínimo 2 letras'}
                        })
                    }
                    placeholder='Ingrese Título'
                    className='form-control my-2'
                ></input>
                {
                    errors.titulo &&
                    <span className="text-danger text-small d-block mb-2">
                    {errors.titulo.message}
                </span>}
                <input
                    {...register("descripcion", {
                            required: {value: true, message: 'Campo obligatorio'}
                        })
                    }
                    placeholder='Ingrese Descripción'
                    className='form-control my-2'
                ></input>
                {
                    errors.descripcion &&
                    <span className="text-danger text-small d-block mb-2">
                    {errors.descripcion.message}
                </span>}
                <button className='btn btn-primary'>Agregar</button>
            </form>
            <ul>
                {
                    Entradas.map(item => 
                        <li key={item.titulo}>{item.titulo} - {item.descripcion}</li>
                    )
                }
            </ul>
        </Fragment>
     );
}
 
export default EjemploUno;