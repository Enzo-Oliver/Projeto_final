function Formulario() {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div
        className="border border-2 border-white p-4 rounded"
        style={{ width: "400px" }}
      >
        <div>
          <label htmlFor="nomeUsuario" className="form-label">
            Trocar nome de usuário:
          </label>
          <input
            className="form-control form-control-sm"
            type="text"
            id="nomeUsuario"
            placeholder="Novo nome de usuário"
          />
        </div>
        <div>
          <label htmlFor="bioUsuario" className="form-label">
            Trocar bio:
          </label>
          <textarea
            className="form-control"
            id="bioUsuario"
            placeholder="Escreva sua bio"
            rows="3"
          />
        </div>

        <div>
          <label htmlFor="uploadFoto" className="form-label">
            Escolha sua foto de perfil
          </label>
          <input
            className="form-control"
            type="file"
            id="uploadFoto"
            accept="image/*"
          />
        </div>
      </div>
    </div>
  );
}

export default Formulario;
