function Cabecalho() {
  return (
    <>
      <div className="container py-4">
        <div className="row justify-content-center">
          <div className="col-12 col-md-12 col-lg-12">
            <div className="card-body d-flex flex-column align-items-center gap-3">
              <div className="d-flex align-items-center px-2">
                <div class="position-relative d-inline-block">
                  <img
                    src="https://placehold.co/1200x400"
                    class="img-fluid"
                    alt="Imagem de fundo"
                  />
                  <img
                    src="https://placehold.co/300x300"
                    class="img-fluid position-absolute top-0 start-0 rounded-circle border border-5 border-white m-7"
                    alt="Imagem do topo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cabecalho;
