function Form() {
  return (
   <main className="container-fluid mt-3">
        <div className="row g-4 align-items-start"></div>
          <div className="col-6 col-md-6">
            <form className="p-6">
              
              <div className="mb-5 row">
                <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Email</label>
                <div className="col-sm-10">
                  <input 
                    placeholder="usuario@gmail.com"
                    type="password" 
                    className="form-control" 
                    id="inputPassword"
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                <div className="col-sm-10">
                  <input 
                    placeholder="********"
                    type="password" 
                    className="form-control" 
                    id="inputPassword"
                  />
                </div>
              </div>

            </form>
          </div>
           </main>
  )
}

export default Form