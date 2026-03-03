import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { useState } from "react";

function Login() {
  const [cargando, setCargando] = useState(false);

  const login = async () => {
    try {
      setCargando(true);

      const result = await signInWithPopup(auth, provider);
      console.log("Usuario logueado:", result.user);

    } catch (error) {
      console.error("Error login:", error);
    } finally {
      setCargando(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <img src="/img/FGR.png" alt="Escudos FGR" />
      </div>

      <div className="login-card">
        <h1>Catálogo de Descuentos</h1>
        <p>Portal institucional para personal FGR</p>

        <button className="btn-google" onClick={login} disabled={cargando}>
          {cargando ? "Ingresando..." : "🔐 Ingresar con Google"}
        </button>
      </div>

      {cargando && (
        <div className="loader-overlay">
          <div className="spinner"></div>
          <p>Validando credenciales...</p>
        </div>
      )}
    </div>
  );
}

export default Login;