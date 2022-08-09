import React, {useState} from "react";
import './Form.css';

const Form = ({onSend})=>{

    //const [form,setForm] = useState("")
    const [name,setName] = useState("")
    const [phone,setPhone] = useState("")
    const [email,setEmail] = useState("")

    const [infoLoaded,setInfoLoaded] = useState(false)


    return(
        <>
        <div className="form">
            <h3>Ingresá tus datos para finalizar tu compra</h3>
            <form>
                <input type="text" name="name" value={name} placeholder="Tu nombre" onChange={e => setName(e.target.value)} />
                <input type="tel" name="phone" value={phone} placeholder="Teléfono" onChange={e => setPhone(e.target.value)} />
                <input type="email" name="email" value={email} placeholder="Correo electrónico" onChange={e => setEmail(e.target.value)}/>
                <button disabled={(infoLoaded)?'disabled':''} onClick={(e)=>{e.preventDefault();onSend(name,phone,email);setInfoLoaded(true)}}>{(infoLoaded)?'Datos cargados':'Confirmar'}</button>
            </form>
        </div>

        <h2>Tus datos:</h2>
        <p>Nombre: {name}</p>
        <p>Teléfono: {phone}</p>
        <p>Email: {email}</p>
        <p><strong>Verificá que tus datos sean correctos y hacé clic en finalizar compra</strong></p>
        </>
    );
}

export default Form;