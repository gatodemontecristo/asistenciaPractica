import { Fragment, useState } from "react";
import "./estilos-caja.css";
import { Button } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const Caja = ({elemento,num}) => {
  let imagen = "./rostros/foto0"+num+".jfif";

  const [asistencia,setAsistencia]=useState("primary");

  const modoTemprano = () =>{
    setAsistencia(c=>"primary");
  }
  const modoTarde = () =>{
    setAsistencia(c=>"danger");
  }
  return (
    <Fragment>
      <div className="principal">
        <img src={imagen} alt="" />
        <div className="contenido2">
          <p id="nombre">{elemento.nombre} {elemento.apellido} </p>
          <div className="contenido">
            <p>In : {elemento.entrada}</p> <p>Out : {elemento.salida}</p>
          </div>
        </div>
        <Button color={asistencia} onClick={()=> asistencia === "primary" ? modoTarde() : modoTemprano()}>{(asistencia === "primary" ? 'A' : 'F')}</Button>
      </div>
    </Fragment>
  );
};
