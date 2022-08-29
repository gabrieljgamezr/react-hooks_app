import { useEffect, useState } from "react"
import { useForm } from "../hooks/useForm";

export const FormWithCoustomHook = () => {

    const { formState, onInputChange, onResetForm, username, email, password} = useForm({
        username: '',
        password: '',
        email: ''
    });

    // const { username, email, password } = formState;
    
    return (
        <>
            <h1>Formulario Con Coustom Hook</h1>
            <hr/>

            <input 
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={ username }
                onChange={ onInputChange }
            />
            <input 
                type="password"
                className="form-control mt-2"
                placeholder="Password"
                name="password"
                value={password}
                onChange={ onInputChange }
            />
            <input 
                type="email"
                className="form-control mt-2"
                placeholder="ejemplo@correo.com"
                name="email"
                value={ email }
                onChange={ onInputChange }
            />
            <button onClick={onResetForm} className="btn btn-primary mt-2">Borrar</button>

        </>
    );
}