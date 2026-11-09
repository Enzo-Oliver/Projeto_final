function Cabecalho() {
  return (
    <div className="position-relative w-100">
      <img
        src="https://placehold.co/1200x400"
        className="w-100 object-fit-cover d-block"
        style={{ height: "300px" }}
        alt="Imagem de fundo"
      />
      <img
        src="https://placehold.co/300x300"
        className="position-absolute top-50 start-0 translate-middle-y ms-4 rounded-circle border border-5 border-white object-fit-cover"
        style={{ width: "150px", height: "150px" }}
        alt="Foto de perfil"
      />
    </div>
  );
}

export default Cabecalho;