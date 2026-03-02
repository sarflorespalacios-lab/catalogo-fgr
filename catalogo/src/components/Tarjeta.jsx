function Tarjeta({ descuento }) {

  return (
    <div className="tarjeta-descuento">

      <div className="badge-categoria">
        👁 {descuento.categoria}
      </div>

      <div className="logo-descuento">
        <img src={descuento.imagen} alt={descuento.titulo} />
      </div>

      <h3 className="titulo-descuento">
        {descuento.titulo}
      </h3>

      <p className="descripcion-descuento">
        {descuento.descripcion}
      </p>

      <div className="acciones-descuento">

        <button className="btn-ver">
          Ver más
        </button>

        <div className="estado-promocion">
          Promoción finaliza en:
          <strong> {descuento.estado}</strong>
        </div>

      </div>

    </div>
  );
}

export default Tarjeta;
