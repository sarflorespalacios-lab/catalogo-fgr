import { descuentos } from "../data/descuentos";
import Tarjeta from "../components/Tarjeta";

function Favoritos() {

  const favoritosIds = JSON.parse(localStorage.getItem("favoritos")) || [];

  const favoritos = descuentos.filter(d =>
    favoritosIds.includes(d.id)
  );

  return (
    <div style={{ padding: "30px" }}>
      <h2>❤️ Mis Favoritos</h2>

      {favoritos.length === 0 ? (
        <p>No tienes descuentos guardados</p>
      ) : (
        <section className="catalogo">
          {favoritos.map(d => (
            <Tarjeta key={d.id} descuento={d} />
          ))}
        </section>
      )}
    </div>
  );
}

export default Favoritos;
