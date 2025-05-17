import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Formulario from "./components/Formulario";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Inicio from "./components/Inicio";
import Municipio from "./components/Municipio";
import Noticias from "./components/Noticias";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Css/Inicio.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/municipio" element={<Municipio />} />
        <Route path="/noticias" element={<Noticias />} />
      </Routes>
      <Formulario />
      <Footer />
    </Router>
  );
}

export default App;
