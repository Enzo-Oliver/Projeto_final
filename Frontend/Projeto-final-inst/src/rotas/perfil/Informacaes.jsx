function Informacaes({ usuario }) {
  return (
    <>
      <div className="container py-4">
        <div className="row justify-content-center">
          <div className="col-12 col-md-12 col-lg-12">
            <div className="card-body d-flex flex-column align-items-center gap-3">
              <div className="d-flex align-items-center px-2">
                <div className="position-relative d-inline-block"></div>
                <div className="container">
                  <div className="row">
                    <div className="col-9">{usuario.nome}</div>
                    <div className="col-5">
                      {usuario.bio}
                    </div>

                    <div className="col-6 mx-2">
                      <button
                        type="button"
                        className="btn-solid theme-primary btn-lg"
                      >
                        Seguir
                      </button>
                      <button
                        type="button"
                        className="btn-solid theme-secondary btn-lg ms-5"
                      >
                        Enviar Mensagens
                      </button>
                      <p>
                        <span className="stat">
                          <b> 828</b> seguidores
                        </span>
                        <span className="stat">
                          <b> 1.059</b> seguindo
                        </span>
                        <span className="stat">
                          <b> 3</b> Posts
                        </span>
                      </p>
                      <div>
                      <a href="https://github.com/Enzo-Oliver">github.com/Enzo-Oliver</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Informacaes;
