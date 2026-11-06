function Header() {
   return (
       <nav className="navbar bg-1 fg-2">
          <div className="container-fluid">
            <button
              className="btn-icon navbar-toggler"
              type="button"
              data-bs-toggle="drawer"
              data-bs-target="#navbarTogglerDemo03"
              aria-controls="navbarTogglerDemo03"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" aria-hidden="true"></span>
            </button>
            <span className="avatar">
              <img
                className="avatar-img position-absolute top-0 end-0"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6sEZ6sPHMJwV8mAVPbKbKDB-JMMnHM7L8zJ-eOKJP5w&s=10"
                alt="mdo"
              />
            </span>
            <dialog
              className="drawer drawer-end"
              tabIndex="-1"
              id="navbarTogglerDemo03"
              aria-labelledby="navbarTogglerDemo03Label"
            >
              <div className="drawer-header">
                <h5 className="drawer-title" id="navbarTogglerDemo03Label">
                  Menu
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="drawer"
                  aria-label="Close"
                ></button>
              </div>
              <div className="drawer-body">
                <ul className="navbar-nav me-auto mb-2">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      Posts
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Salvos
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" aria-disabled="true">
                      Reposts
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" aria-disabled="true">
                      Marcados
                    </a>
                  </li>
                </ul>
                <form className="d-flex" role="search">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn-outline theme-success" type="submit">
                    Search
                  </button>
                </form>
              </div>
            </dialog>
          </div>
        </nav>
   ) 
}

export default Header;