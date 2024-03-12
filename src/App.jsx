import "./App.css";
import { AgregarDatos } from "./AgregarDatos.jsx";
import { Lista } from "./ListaTareas.jsx";
export function App() {
  const formatUserName = (useName) => `@${useName}`;
  return (
    <div className="Contenedor-General">
      <div className="Contenedor-Agregar">
        <AgregarDatos />
      </div>
      <div className="Contenedor-Lista">
        <Lista />
      </div>
    </div>
  );
}
