import React from "react";
import "../styles/Evento.css";
function EventoB(props) {
    return (
        <div className="card-container">

            <img className="card-image"
                src={require(`../images/${props.image}.jpeg`)}
                alt="Foto del evento" />
            <div className="card-content">
                <h2 className="card-title">{props.title}</h2>
                <p className="card-date">{props.dateLiteral}</p>
                <p className="card-place">{props.placeLiteral}</p>
                <p className="card-description">{props.description}</p>
                <div className="card-icons">
                    <a href="https://facebook.com" className="icon-link"><div className="icon-box"> <img className="icon" src={require(`../images/${props.icon1}.svg`)} alt="Icon" /></div></a>
                    <a href="https://youtube.com" className="icon-link"><div className="icon-box"><img className="icon" src={require(`../images/${props.icon2}.svg`)} alt="Icon" /></div></a>
                    <a href="https://twitter.com" className="icon-link"><div className="icon-box"><img className="icon" src={require(`../images/${props.icon3}.svg`)} alt="Icon" /></div></a>
                </div>
            </div>
            
        </div>
    );
}

export default EventoB;