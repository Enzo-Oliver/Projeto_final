function Cabecalho() {
  return (
    <>
      <div className="container py-4">
        <div className="row justify-content-center">
          <div className="col-12 col-md-12 col-lg-12">
            <div className="card-body d-flex flex-column align-items-center gap-3">
              <div className="d-flex align-items-center px-2">
                <span className="fw-bold text-dark"></span>
                <div>
                    <img src="https://placehold.co/1200x400" class="img-fluid" alt="..."></img>
                    <div>
                        {/* <img src="https://placehold.co/400x400" class="img-thumbnail" alt="..."></img> */}
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

export default Cabecalho;
