const URL_API = 'http://localhost:3000'

function Posts({ post, aoCurtir }) {
  async function curtir() {
    await fetch(`${URL_API}/posts/${post.id}`, { method: 'PATCH' })
    aoCurtir()
  }

  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        <div className="col-8 col-md-8 col-lg-6">
          <div className="card-body d-flex flex-column align-items-center gap-3">
            <div className="d-flex align-items-center px-2">
              <span className="fw-bold text-dark">{post.usuario}</span>
            </div>

            <img src={post.imagem} className="img-fluid rounded" alt={post.texto} />

            <div className="d-flex justify-content-center gap-2 w-100">
              <button type="button" className="btn-solid theme-primary" onClick={curtir}>
                ❤️ {post.curtidas}
              </button>
              <button type="button" className="btn-solid theme-primary">💭</button>
              <button type="button" className="btn-solid theme-primary">♾️</button>
              <button type="button" className="btn-solid theme-primary">✈️</button>
            </div>

            <section className="w-100 px-2">
              <p className="text-start m-0">{post.texto}</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Posts
