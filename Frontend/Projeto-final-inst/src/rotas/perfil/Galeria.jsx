function GradeFotos({ qtd, src }) {
  const fotos = Array.from({ length: qtd }, (_, i) => i + 1);

  return (
    <div className="row justify-content-center gy-1 gx-1">
      {fotos.map((id) => (
        <div key={id} className="col-4">
          <img
            src={src}
            alt={`post ${id}`}
            className="img-fluid w-100 d-block"
          />
        </div>
      ))}
    </div>
  );
}

function Galeria() {
  return (
    <div className="tab-content container" id="pills-tabContent">
      <div
        className="tab-pane fade show active"
        id="pills-home"
        role="tabpanel"
        aria-labelledby="pills-home-tab"
        tabIndex="0"
      >
        <GradeFotos qtd={15} src="https://placehold.co/600" />
      </div>

      <div
        className="tab-pane fade"
        id="pills-profile"
        role="tabpanel"
        aria-labelledby="pills-profile-tab"
        tabIndex="0"
      >
        <GradeFotos qtd={15} src="https://placehold.co/310x400" />
      </div>

      <div
        className="tab-pane fade"
        id="pills-contact"
        role="tabpanel"
        aria-labelledby="pills-contact-tab"
        tabIndex="0"
      >
        <GradeFotos qtd={15} src="https://placehold.co/310x400" />
      </div>
    </div>
  );
}

export default Galeria;