function Tarjeta({ descuento }) {

  return (
    <div className="tarjeta">

      {/* 🟢 CATEGORÍA */}
      <span className="categoria">
        {descuento.categoria.toUpperCase()}
      </span>

      {/* 🖼 IMAGEN */}
      <div className="imagen-container">
        <img 
          src={descuento.imagen || "https://via.placeholder.com/150"} 
          alt={descuento.nombre} 
        />
      </div>

      {/* 🏷 TÍTULO */}
      <h3 className="titulo">
        {descuento.nombre}
      </h3>

      {/* 📄 DESCRIPCIÓN */}
      <p className="descripcion">
        {descuento.descripcion}
      </p>

      {/* 🔘 ACCIONES */}
      <div className="acciones">

        <button className="btn-ver">
          Ver más
        </button>

        <div className="estado">
          Promoción finaliza en:
          <strong> {descuento.estado}</strong>
        </div>

      </div>

    </div>
  );
}

export default Tarjeta;