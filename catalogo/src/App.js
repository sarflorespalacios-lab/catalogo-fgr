import { BrowserRouter, Routes, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

import Header from "./components/Header";
import Inicio from "./pages/Inicio";
import Favoritos from "./pages/Favoritos";
import Login from "./pages/Login";
import "./styles/catalogo.css";

function App() {
  const [user, setUser] = useState(undefined);
  const [loading, setLoading] = useState(true);

  const [categoria, setCategoria] = useState("todas");
  const [busqueda, setBusqueda] = useState(""); // 🔥 NUEVO

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (usuario) => {
      console.log("Estado de sesión:", usuario);
      setUser(usuario);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div style={{ textAlign: "center", marginTop: "100px" }}>
        <h2>Cargando aplicación...</h2>
      </div>
    );
  }

  return (
    <BrowserRouter>
      {user ? (
        <>
          {/* 🔥 PASAMOS setBusqueda */}
          <Header 
            setCategoria={setCategoria} 
            setBusqueda={setBusqueda} 
          />

          <Routes>
            {/* 🔥 PASAMOS busqueda */}
            <Route 
              path="/" 
              element={<Inicio categoria={categoria} busqueda={busqueda} />} 
            />

            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
        </>
      ) : (
        <Login />
      )}
    </BrowserRouter>
  );
}

export default App;