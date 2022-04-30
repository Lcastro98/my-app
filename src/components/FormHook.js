import React, {Fragment} from 'react'
import { useForm } from 'react-hook-form'

const FormHook = () => {

    const {register, formState: {errors}, handleSubmit} = useForm();

    const onSubmit = (data, e) => {
        console.log(data)
        e.target.reset()
    }

    return ( 
        <Fragment>
            <h1>Formulario</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input
                {...register("titulo", {
                        required: "Ingrese un nombre"}
                    )
                }
                className="form-control mb-2"
            ></input>
                <span className="text-danger text-small d-block mb-2">
                    {errors?.titulo?.message}
                </span>
                <button type='submit' className='btn btn-primary'>Enviar</button>
            </form>
        </Fragment>
    );
}
 
export default FormHook;