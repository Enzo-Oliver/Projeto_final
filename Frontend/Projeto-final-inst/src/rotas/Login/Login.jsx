import Header from "./../../componentes_globais/Header"
import Foto_cadrastro from "./Foto_cadrastro"
import Form from "./Form"

function Login() {
  return (
    <>
      <main className="container-fluid mt-5">
        <div className="row align-items-center">
          <Foto_cadrastro />
          <Form />
        </div>
      </main>
    </>
  )
}

export default Login