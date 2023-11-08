import React from "react";
import "../stylesheet/card.css"

function Card(props){
  return(
    <div className="contenedor-card">
      <img
        className="imagen-card" 
        src={require(`../imagenes/${props.imagen}.jpeg`)}
        alt="Foto de Rommel" />
        <div className="contenedor-texto-card">
          <p className="nombre-card">{props.nombre}</p>
          <p className="cargo-card">{props.cargo}</p>
          <p className="texto-card">{props.texto}</p>
        </div>
    </div>
  );
}

export default Card

