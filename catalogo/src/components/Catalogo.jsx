import Tarjeta from "./Tarjeta";
import { descuentos } from "../data/descuentos";

function Catalogo({ categoria, busqueda }) {

  // Filtrar descuentos
  const filtrados = descuentos.filter((d) => {
    const coincideBusqueda =
      d.nombre.toLowerCase().includes((busqueda || "").toLowerCase()) ||
      d.descripcion.toLowerCase().includes((busqueda || "").toLowerCase());

    const coincideCategoria =
      categoria === "todas" || d.categoria === categoria;

    return coincideBusqueda && coincideCategoria;
  });

  return (
    <>
      {/* RESULTADOS */}
      <p className="resultados">
        Resultados encontrados: {filtrados.length}
      </p>

      {/* CATALOGO */}
      <section className="catalogo">
        {filtrados.map((d) => (
          <Tarjeta key={d.id} descuento={d} />
        ))}
      </section>
    </>
  );
}

export default Catalogo;