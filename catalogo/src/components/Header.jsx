import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function Header({ setCategoria, setBusqueda }) {
  const [user] = useAuthState(auth);
  const [menuAbierto, setMenuAbierto] = useState(false);

  const cerrarSesion = () => {
    signOut(auth);
  };

  return (
    <header className="header">

      {/* 🔹 PARTE SUPERIOR */}
      <div className="header-top">

        {/* LOGO */}
        <img src="/img/FGR.png" alt="Escudos FGR" className="logo-fgr" />

        {/* 🔥 BUSCADOR CONECTADO */}
        <div className="buscador-header">
          <input
            type="text"
            placeholder="Buscar descuentos..."
            onChange={(e) => setBusqueda(e.target.value)}
          />
          <button>🔎</button>
        </div>

        {/* MENÚ DERECHO */}
        <nav className="menu">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "menu-link activo" : "menu-link"
            }
          >
            🏠 Inicio
          </NavLink>

          <NavLink
            to="/favoritos"
            className={({ isActive }) =>
              isActive ? "menu-link activo" : "menu-link"
            }
          >
            ❤️ Favoritos
          </NavLink>

          <button
            className="btn-menu"
            onClick={() => setMenuAbierto(true)}
          >
            ☰
          </button>

        </nav>
      </div>

      {/* 🔹 USUARIO */}
      {user && (
        <div className="usuario-info">
          <p className="bienvenida">
            Bienvenido: {user.displayName || user.email}
          </p>

          <button className="btn-logout" onClick={cerrarSesion}>
            Cerrar sesión
          </button>
        </div>
      )}

      {/* 🔹 MENU LATERAL */}
      {menuAbierto && (
        <div
          className="menu-overlay"
          onClick={() => setMenuAbierto(false)}
        >
          <div
            className="menu-lateral"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="menu-cerrar">
              <button onClick={() => setMenuAbierto(false)}>✕</button>
            </div>

            <ul>
              <li onClick={() => { setCategoria("todas"); setMenuAbierto(false); }}>
                🏠 Todas
              </li>

              <li onClick={() => { setCategoria("creditos"); setMenuAbierto(false); }}>
                💰 Créditos y Servicios Financieros
              </li>

              <li onClick={() => { setCategoria("seguros"); setMenuAbierto(false); }}>
                🛡 Seguros
              </li>

              <li onClick={() => { setCategoria("entretenimiento"); setMenuAbierto(false); }}>
                🎬 Entretenimiento
              </li>

              <li onClick={() => { setCategoria("hoteles"); setMenuAbierto(false); }}>
                🏨 Hoteles
              </li>

              <li onClick={() => { setCategoria("educacion"); setMenuAbierto(false); }}>
                🎓 Educación
              </li>

              <li onClick={() => { setCategoria("funerarias"); setMenuAbierto(false); }}>
                ✝ Funerarias
              </li>

              <li onClick={() => { setCategoria("restaurantes"); setMenuAbierto(false); }}>
                🍽 Restaurantes
              </li>

              <li onClick={() => { setCategoria("viajes"); setMenuAbierto(false); }}>
                ✈ Viajes y Turismo
              </li>

              <li onClick={() => { setCategoria("salud"); setMenuAbierto(false); }}>
                ❤️ Salud y Bienestar
              </li>

              <li onClick={() => { setCategoria("miscelaneos"); setMenuAbierto(false); }}>
                📦 Misceláneos
              </li>
              <li onClick={() => { setCategoria("deportes"); setMenuAbierto(false); }}>
                📦 Deportes
              </li>
            </ul>

          </div>
        </div>
      )}

    </header>
  );
}

export default Header;