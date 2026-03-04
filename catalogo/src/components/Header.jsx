import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [user] = useAuthState(auth);
  const [menuAbierto, setMenuAbierto] = useState(false);

  const cerrarSesion = () => {
    signOut(auth);
  };

  return (
    <header className="header">

      <h1 className="titulo">Catálogo FGR</h1>

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

        {/* BOTÓN DEL MENÚ LATERAL */}
        <button
          className="btn-menu"
          onClick={() => setMenuAbierto(true)}
        >
          ☰
        </button>

      </nav>

      {/* MENU LATERAL */}
      {menuAbierto && (
        <div className="menu-overlay">
          <div className="menu-lateral">

            <div className="menu-cerrar">
              <button onClick={() => setMenuAbierto(false)}>✕</button>
            </div>

            <ul>
              <li>💰 Créditos y Servicios Financieros</li>
              <li>🛡 Seguros</li>
              <li>🎬 Entretenimiento</li>
              <li>🏨 Hoteles</li>
              <li>🎓 Educación</li>
              <li>✝ Funerarias</li>
              <li>🍽 Restaurantes</li>
              <li>✈ Viajes y Turismo</li>
              <li>❤️ Salud y Bienestar</li>
              <li>📦 Misceláneos</li>
            </ul>

          </div>
        </div>
      )}

    </header>
  );
}

export default Header;