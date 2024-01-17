import '../style/Boton.css';

function Boton({ texto, esBotonClick, funcionClick }) {

    return (
        <button className="eliminar"
            onClick={funcionClick}>
            {texto}
        </button>
    )
}

export default Boton;