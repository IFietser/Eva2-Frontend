function Footer() {
  return (
    <footer className="text-center">
      <div className="logo">
        <img
          src="/Imagenes/Logo.png"
          alt="Escudo de la Municipalidad de Cholchol"
        />
      </div>
      <div>
        <i className="bi bi-geo-alt"></i>
        Jose Joaquin Pérez, 449, Cholchol, IX Región, Chile
        <br />
      </div>
      <div>
        <i className="bi bi-telephone"></i>
        +56 45 2 221 000
        <br />
      </div>
      <div>
        <i className="bi bi-envelope"></i>
        oficinadepartes@municholchol.cl
        <br />
      </div>
      <p className="muni text-center">
        © Municipalidad de Cholchol - Todos los derechos reservados
      </p>
    </footer>
  );
}

export default Footer;
