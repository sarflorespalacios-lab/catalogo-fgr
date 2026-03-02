import { useParams, useNavigate } from "react-router-dom";
import { descuentos } from "../data/descuentos";

function Detalle() {

  const { id } = useParams();
  const navigate = useNavigate();

  const descuento = descuentos.find(
    d => d.id === parseInt(id)
  );

  if (!descuento) return <p>No encontrado</p>;

  return (
    <div className="detalle-container">

      <button 
        className="btn-regresar"
        onClick={() => navigate("/")}
      >
        ← Regresar
      </button>

      <div className="detalle-card">

        <img 
          src={descuento.imagen}
          alt={descuento.nombre}
          className="detalle-img"
        />

        <h2>{descuento.nombre}</h2>

        <p className="detalle-categoria">
          {descuento.categoria}
        </p>

        <p className="detalle-descripcion">
          {descuento.descripcion}
        </p>

      </div>

    </div>
  );
}

export default Detalle;
