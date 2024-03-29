import { useState } from "react";
import { Lista } from "./ListaTareas.jsx";
export function AgregarDatos({ agregarTarea }) {
  const [datosForm, setDatosForm] = useState({
    titulo: "",
    descripcion: "",
    fechaInicio: "",
    fechaFin: "",
  });
  const [listaB, serListaB] = useState([]); //valores
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDatosForm({ ...datosForm, [name]: value });
  };

  const guardarTarea = () => {
    serListaB((value) => [...value, datosForm]);
    //agregarTarea(datosForm);
    // agregarTarea(nuevaTarea);
    console.log("Tarea:", { datosForm });
    setDatosForm({
      titulo: "",
      descripcion: "",
      fechaInicio: "",
      fechaFin: "",
    });
    console.log("Datos clean");
  };

  return (
    <div>
      <form>
        <div className="Contenedor-Texto">
          <label>Título de la Nota:</label>
          <input
            onChange={handleChange}
            value={datosForm.titulo}
            name="titulo"
          />
          <label>Descripción:</label>
          <input
            onChange={handleChange}
            value={datosForm.descripcion}
            name="descripcion"
          />
        </div>
        <div className="Contenedor-Fechas">
          <label>Fecha Inicio:</label>
          <input
            onChange={handleChange}
            value={datosForm.fechaInicio}
            type="date"
            name="fechaInicio"
          />
          <label>Fecha Fin:</label>
          <input
            onChange={handleChange}
            value={datosForm.fechaFin}
            type="date"
            name="fechaFin"
          />
        </div>
      </form>
      <div className="Contenedor-Busqueda">
        <button onClick={guardarTarea}>Guardar</button>
      </div>
      <Lista datosForm={listaB}></Lista>
    </div>
  );
}
