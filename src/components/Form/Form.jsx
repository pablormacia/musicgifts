import React, {useState,useEffect} from "react";
import './Form.css';

const Form = ()=>{

    const [form,setForm] = useState("")

    useEffect(()=>{
        console.log(form)
    },[form])

    return(
        <div className="form">
            <h2>Ingresá tus datos para finalizar tu compra</h2>
            <form onSubmit={
                e=>{e.preventDefault(); 
                setForm(e.target)
                
                }}>
                <input type="text" name="name" placeholder="Tu nombre" />
                <input type="number" name="phone" placeholder="Teléfono" />
                <input type="email" name="email" placeholder="Correo electrónico" />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default Form;