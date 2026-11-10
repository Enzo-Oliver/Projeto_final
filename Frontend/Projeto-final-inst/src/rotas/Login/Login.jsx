import Foto_cadrastro from "./Foto_cadrastro"
import Form from "./Form"

function Login() {
  return (
    <main
      className="d-flex justify-content-center align-items-center flex-wrap min-vh-100 p-4"
      style={{ gap: "3rem" }}
    >
      <Foto_cadrastro />
      <Form />
    </main>
  )
}

export default Login
