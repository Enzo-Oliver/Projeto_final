function Informacaes({ usuario, totalPosts }) {
  return (
    <div className="container py-4">
      <div className="row">
        <div className="col-12 col-md-4 offset-md-2">
          <h5 className="mb-1">{usuario.nome}</h5>
          <p className="mb-2">{usuario.bio}</p>
          {usuario.link && (
            <a href={usuario.link}>{usuario.link.replace("https://", "")}</a>
          )}
        </div>

        <div className="col-12 col-md-6">
          <div className="row text-center">
            <div className="col-4">
              <b className="d-block">{usuario.seguidores}</b>
              <span>seguidores</span>
            </div>
            <div className="col-4">
              <b className="d-block">{usuario.seguindo}</b>
              <span>seguindo</span>
            </div>
            <div className="col-4">
              <b className="d-block">{totalPosts}</b>
              <span>Posts</span>
            </div>
          </div>

          <div className="d-flex justify-content-center gap-2 mt-3">
            <button type="button" className="btn-solid theme-primary btn-lg">
              Seguir
            </button>
            <button type="button" className="btn-solid theme-secondary btn-lg">
              Enviar Mensagens
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Informacaes;
