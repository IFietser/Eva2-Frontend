function Noticias() {
  return (
    <section className="inicio noticias text-center">
      <div className="container-fluid">
        <div className="row">
          {/* Noticia 1 */}
          <div className="col-12 col-md-6 mb-4 d-flex flex-column align-items-center">
            <h5 className="auto">Taller comunitario</h5>
            <img
              src="/Imagenes/Noticias/1.jpg"
              alt="Taller comunitario"
              className="img-fluid rounded"
            />
          </div>
          {/* Noticia 2 */}
          <div className="col-12 col-md-6 mb-4 d-flex flex-column align-items-center">
            <h5 className="auto">Acondicionamiento Físico</h5>
            <img
              src="/Imagenes/Noticias/2.jpg"
              alt="Acondicionamiento Físico"
              className="img-fluid rounded"
            />
          </div>
          {/* Noticia 3 */}
          <div className="col-12 col-md-6 mb-4 d-flex flex-column align-items-center">
            <h5 className="auto">Unidad de Tránsito</h5>
            <p className="Historia text-center">
              Click en la imagen para más información.
            </p>
            <a
              href="https://maps.app.goo.gl/LfUoXeFVSTRCv2YC7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/Imagenes/Noticias/3.jpg"
                alt="Unidad de Tránsito"
                className="img-fluid rounded"
              />
            </a>
          </div>
          {/* Noticia 4 */}
          <div className="col-12 col-md-6 mb-4 d-flex flex-column align-items-center">
            <h5 className="auto">Movilización</h5>
            <img
              src="/Imagenes/Noticias/4.jpg"
              alt="Movilización"
              className="img-fluid rounded"
            />
          </div>
          {/* Noticia 5 */}
          <div className="col-12 col-md-6 mb-4 d-flex flex-column align-items-center">
            <h5 className="auto">Programa Beca</h5>
            <img
              src="/Imagenes/Noticias/5.jpg"
              alt="Programa Beca"
              className="img-fluid rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Noticias;
