import React, { useState } from "react";
import Boton from './Boton.js'
function Perfil(){
    const [disable, setDisable] = useState(true);
    const edit = () =>{
        setDisable(!disable)
    }
    return(
        <div className="main-box">
        <div className="input-box">
            <p className="Text">Nombre</p>
            <input type="text" className="input-name" disabled={disable}></input>
            <p className="Text">Apellido</p>
            <input type="text" className="input-lastname" disabled={disable}></input>
            <p className="Text">Contraseña</p>
            <input type="text" className="input-password" disabled={disable}></input>
            
        </div>
        <div className="button-box">
            <Boton onClick={edit} texto={disable ? "Edit" : "Save"}></Boton>
        </div>

    </div>
    );
}

export default Perfil;