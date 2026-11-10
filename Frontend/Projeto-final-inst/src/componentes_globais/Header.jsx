import { Link } from "react-router-dom";

function Header() {
   const logado = JSON.parse(localStorage.getItem("usuario"));

   function sair() {
     localStorage.removeItem("usuario");
   }

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
                src={logado ? logado.foto : "https://placehold.co/100x100"}
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
                    <Link className="nav-link" to="/feed">
                      Feed
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/perfil">
                      Perfil
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/configuracao">
                      Configurações
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login" onClick={sair}>
                      Sair
                    </Link>
                  </li>
                </ul>
              </div>
            </dialog>
          </div>
        </nav>
   ) 
}

export default Header;