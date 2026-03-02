import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";

function Header() {
  const [user] = useAuthState(auth);

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

      </nav>

    </header>
  );
}

export default Header;
