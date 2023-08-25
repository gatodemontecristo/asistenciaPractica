import React from 'react'
import ReactDOM from 'react-dom/client';
import {Caja} from "./componente-caja";
import Registros from "./alumnos.json"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {Registros.map( (alumno, index)=>
      <Caja elemento={alumno} num={index}></Caja>
    )}
  </React.StrictMode>
)
