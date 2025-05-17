import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="logo" style={{ textAlign: "center" }}>
        <img src="/Imagenes/Logo.png" alt="Escudo de Cholchol" />
      </div>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
              end
            >
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/municipio"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Municipio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/noticias"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Noticias
            </NavLink>
          </li>
          <li>
            <a href="#formulario-contacto" id="contacto">
              Contacto
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
