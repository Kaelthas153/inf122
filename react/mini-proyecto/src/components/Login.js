import React from "react";
import Boton from './Boton.js'
import "../styles/Login.css"
function Login() {
    const login = () => {
        console.log("Login");
    }
    const register = () => {
        console.log("Register");
    }
    return (

        <div className="main-box">
            <div className="input-box">
                <p className="Text">Nombre</p>
                <input type="text" className="input-name"></input>
                <p className="Text">Contraseña</p>
                <input type="text" className="input-password"></input>
            </div>
            <div className="button-box">
                <Boton onClick={login} texto="Login"></Boton>
                <Boton onClick={register} texto="Register"></Boton>
            </div>

        </div>
    );
}

export default Login;