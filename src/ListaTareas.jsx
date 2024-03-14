import { AgregarDatos } from "./AgregarDatos";
export function Lista({ datosForm }) {
  console.log("dentro de la lista:", datosForm);
  return (
    <table>
      <thead>
        <tr>
          <th>Titulo</th>
          <th>Descripción</th>
          <th>Estado</th>
          <th>Fecha Inicio</th>
          <th>Fecha Fin</th>
        </tr>
      </thead>
      <tbody>
        {datosForm.map((datoform) => (
          <tr>
            <td>{datoform.titulo}</td>
            <td>{datoform.descripcion}</td>
            <td>{datoform.fechaInicio}</td>
            <td>{datoform.fechaFin}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
