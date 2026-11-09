import { useState, useEffect } from 'react'
import Header from "../../componentes_globais/Header"
import Cabecalho from "./Cabecalho"
import Informacaes from "./Informacaes"
import Status2 from "../../componentes_globais/Status2"
import Galeria from "./Galeria"

const URL_API = 'http://localhost:3000'

function Perfil() {
  const [usuario, setUsuario] = useState(null)

  useEffect(() => {
    const logado = JSON.parse(localStorage.getItem('usuario'))
    fetch(`${URL_API}/usuarios/${logado.nome}`)
      .then((r) => r.json())
      .then((dados) => setUsuario(dados))
  }, [])

  return (
    <>
      <Header />
      <Cabecalho />
      {usuario && <Informacaes usuario={usuario} />}
      <Status2 />
      <Galeria />
    </>
  )
}

export default Perfil
