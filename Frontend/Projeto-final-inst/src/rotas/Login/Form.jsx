
function Form() {
  return (
    <main className="container-fluid mt-5">
      <div className="row justify-content-center align-items-center">

        {/* Imagem */}
        <div className="col-12 col-md-6">
          <img
            src="https://placehold.co/600x600"
            alt="Imagem ilustrativa"
            className="img-fluid rounded"
          />
        </div>

        {/* Formulário */}
        <div className="col-12 col-md-6">
          <form className="p-4">

            <div className="mb-4">
              <label htmlFor="email" className="form-label">
                Email
              </label>

              <input
                placeholder="usuario@gmail.com"
                type="email"
                className="form-control"
                id="email"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="form-label">
                Password
              </label>

              <input
                placeholder="********"
                type="password"
                className="form-control"
                id="password"
              />
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Entrar
            </button>

          </form>
        </div>

      </div>
    </main>
  );
}

export default Form;
