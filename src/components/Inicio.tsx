function Inicio() {
  return (
    <>
      {/* Accesos rápidos */}
      <section className="accesos-rapidos">
        <a
          href="https://www.portaltransparencia.cl/PortalPdT/directorio-de-organismos-regulados/?org=MU045"
          className="card"
        >
          Transparencia Activa
        </a>
        <a
          href="https://www.leylobby.gob.cl/instituciones/MU045"
          className="card"
        >
          Plataforma ley lobby
        </a>
        <a href="#" className="card">
          <i className="bi bi-telephone"></i> Contactos
        </a>
        <a
          href="https://municholchol.cl:2096/webmaillogout.cgi"
          className="card"
        >
          <i className="bi bi-envelope"></i> WebMail
        </a>
      </section>

      {/* Contenido principal */}
      <section className="inicio noticias text-center">
        <div className="container">
          <h5 className="auto">Últimas Noticias</h5>
          <div className="inicio noticia text-center">
            <h3 className="inicio">
              Cholchol facilita el pago del Permiso de Circulación con
              plataforma online
            </h3>
            <p className="inicio text-center">
              La Ilustre Municipalidad de Cholchol anunció que ya se encuentra
              habilitado el pago del Permiso de Circulación de manera online.
              Esta medida busca simplificar el proceso para los vecinos,
              permitiendo realizar el trámite desde cualquier lugar con conexión
              a internet. Bajo el lema “Con tu permiso, Cholchol avanza”, la
              iniciativa apunta a fomentar la modernización de los servicios
              municipales y apoyar el desarrollo comunal a través del
              cumplimiento de las obligaciones vehiculares.
            </p>
            <img
              src="/Imagenes/Permiso de circulacion.jpg"
              className="imagenmuni img-fluid"
              alt="Permiso de Circulación"
            />
            <br />
            <h5 className="auto">Ilustre municipal de Chol Chol</h5>
            <img
              src="/Imagenes/Muni.jpeg"
              className="imagenmuni img-fluid"
              alt="Municipalidad de Cholchol"
            />
          </div>
          <div className="row mt-4">
            <h5 className="auto">Encuestas Ciudadanas</h5>
            <div className="row row-cols-1 row-cols-md-2 g-4">
              <div className="col">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScBBsnUVPRz9K-SMc7p-sMfZ_s3tTOPvUYjnOr_viCpk6u3TQ/viewform?usp=header"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/Imagenes/encuesta_deportiva.png"
                    alt="Encuesta Deportiva"
                    className="imagenmunis img-fluid"
                  />
                </a>
              </div>
              <div className="col">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScbQ-UPctjQiDLlZRugqqbz1XkY-YPuxFAHfcySveaAMzvBkw/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/Imagenes/encuesta_clima.png"
                    alt="Encuesta Clima"
                    className="imagenmunis img-fluid"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Inicio;
