export function AgregarDatos() {
  return (
    <div>
      <form>
        <div className="Contenedor-Texto">
          <label>Título de la Nota:</label>
          <input name="titulo" />
          <label>Descripción:</label>
          <input name="descripcion" />
        </div>
        <div className="Contenedor-Fechas">
          <label>Fecha Inicio:</label>
          <input type="date" id="fecha" name="fecha" />
          <label>Fecha Fin:</label>
          <input type="date" id="fecha2" name="fecha" />
        </div>
        <div className="Contenedor-Busqueda">
          <button type="submit">Search</button>
        </div>
      </form>
    </div>
  );
}
