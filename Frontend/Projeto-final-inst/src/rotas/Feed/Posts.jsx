function Posts() {
  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        <div className="col-8 col-md-8 col-lg-6">
            <div className="card-body d-flex flex-column align-items-center gap-3">
              <div className="d-flex align-items-center px-2">
                <span className="fw-bold text-dark">
                  opovoonline e popularatacadista
                </span>
              </div>

              <img
                src="https://placehold.co/600x400"
                className="img-fluid rounded"
                alt="Popular Atacadista inaugura unidade no Vila União"
              />

              <div className="d-flex justify-content-center gap-2 w-100">
                <label class="btn-check btn-solid theme-primary">
                  <input
                    type="radio"
                    name="options"
                    autocomplete="off"
                    checked
                  />
                  ❤️
                </label>
                 <label class="btn-check btn-solid theme-primary">
                  <input
                    type="radio"
                    name="options"
                    autocomplete="off"
                    checked
                  />
                  💭
                </label>
                <label class="btn-check btn-solid theme-primary">
                  <input
                    type="radio"
                    name="options"
                    autocomplete="off"
                    checked
                  />
                  ♾️
                </label>
                <label class="btn-check btn-solid theme-primary">
                  <input
                    type="radio"
                    name="options"
                    autocomplete="off"
                    checked
                  />
                  ✈️
                </label>
              </div>

              <section className="w-100 px-2">
                <p className="text-start m-0">
                  <strong>#Publi</strong> A população de Fortaleza já conta com
                  mais uma loja do Popular Atacadista, localizada no bairro Vila
                  União! A nova unidade abre suas portas nesta quinta-feira, dia
                  05/11, às 8h da manhã, com a estrutura totalmente pronta para
                  receber os clientes
                </p>
                <p className="text-start mt-2 text-muted small">
                  Para celebrar este momento, a grande inauguração terá 3 dias
                  de festa e churrasco grátis para a população!
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Posts;
