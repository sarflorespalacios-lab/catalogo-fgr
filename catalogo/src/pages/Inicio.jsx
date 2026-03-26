import Marquesina from "../components/Marquesina";
import Catalogo from "../components/Catalogo";
import Footer from "../components/Footer";

function Inicio({ categoria, busqueda }) {
  return (
    <>
      <Marquesina />
      <Catalogo categoria={categoria} busqueda={busqueda} />
      <Footer />
    </>
  );
}

export default Inicio;