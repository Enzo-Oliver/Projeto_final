import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from "../../componentes_globais/Header"
import Cabecalho from "./Cabecalho"
import Informacaes from "./Informacaes"
import Status2 from "../../componentes_globais/Status2"
import Galeria from "./Galeria"

const URL_API = 'http://localhost:3000'

function Perfil() {
  const [usuario, setUsuario] = useState(null)
  const [posts, setPosts] = useState([])
  const navegar = useNavigate()

  useEffect(() => {
    const logado = JSON.parse(localStorage.getItem('usuario'))

    if (!logado) {
      navegar('/login')
      return
    }

    fetch(`${URL_API}/usuarios/${logado.nome}`)
      .then((r) => r.json())
      .then((dados) => setUsuario(dados))

    fetch(`${URL_API}/posts`)
      .then((r) => r.json())
      .then((todos) => setPosts(todos.filter((p) => p.usuario === logado.nome)))
  }, [navegar])

  return (
    <>
      <Header />
      <Cabecalho foto={usuario ? usuario.foto : 'https://placehold.co/300x300'} />
      {usuario && <Informacaes usuario={usuario} totalPosts={posts.length} />}
      <Status2 />
      <Galeria posts={posts} />
    </>
  )
}

export default Perfil
