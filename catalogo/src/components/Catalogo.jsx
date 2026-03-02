import { useState } from "react";
import Tarjeta from "./Tarjeta";
import { descuentos } from "../data/descuentos";


function Catalogo() {
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("todas");

  // Obtener categorías únicas
  const categorias = ["todas", ...new Set(descuentos.map(d => d.categoria))];

  // Filtrar descuentos
  const filtrados = descuentos.filter((d) => {
    const coincideBusqueda =
      d.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      d.descripcion.toLowerCase().includes(busqueda.toLowerCase());

    const coincideCategoria =
      categoria === "todas" || d.categoria === categoria;

    return coincideBusqueda && coincideCategoria;
  });

  return (
    <>
      {/* BUSCADOR */}
      <div className="barra-busqueda">
  <span className="icono-busqueda">🔎</span>

  <input
    type="text"
    placeholder="Buscar descuento..."
    value={busqueda}
    onChange={(e) => setBusqueda(e.target.value)}
  />

  {busqueda && (
    <button
      className="btn-limpiar"
      onClick={() => setBusqueda("")}
      title="Limpiar búsqueda"
    >
      ✖
    </button>
  )}
</div>


      {/* FILTROS */}
      <div className="filtros">
        {categorias.map((cat) => (
          <button
  key={cat}
  className={categoria === cat ? "activo" : ""}
  onClick={() => setCategoria(cat)}
>
  {cat}
</button>

        ))}
      </div>

      {/* CATALOGO */}
      <p style={{ textAlign: "center" }}>
  Resultados encontrados: {filtrados.length}
</p>
      <section className="catalogo">
        {filtrados.map((d) => (
          <Tarjeta key={d.id} descuento={d} />
        ))}
      </section>
    </>
  );
}

export default Catalogo;
