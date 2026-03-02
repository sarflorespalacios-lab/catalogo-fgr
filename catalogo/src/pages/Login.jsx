import { auth, provider } from "../firebase";
import {
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult
} from "firebase/auth";
import { useState, useEffect } from "react";

function Login() {
  const [cargando, setCargando] = useState(false);

  // Detectar móvil o PWA
  const esMovil = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  useEffect(() => {
    const revisarRedirect = async () => {
      try {
        const result = await getRedirectResult(auth);

        if (result?.user) {
          console.log("Usuario autenticado:", result.user);
        }

        setCargando(false);
      } catch (error) {
        console.error("Error redirect:", error);
        setCargando(false);
      }
    };

    revisarRedirect();
  }, []);

  const login = async () => {
    try {
      setCargando(true);

      if (esMovil) {
        // En celular siempre redirect
        await signInWithRedirect(auth, provider);
      } else {
        // En PC popup
        const result = await signInWithPopup(auth, provider);
        console.log("Usuario:", result.user);
        setCargando(false);
      }
    } catch (error) {
      console.error("Error login:", error);
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