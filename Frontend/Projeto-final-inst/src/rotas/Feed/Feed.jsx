import { useState, useEffect } from 'react'
import Status from "./../../componentes_globais/Status"
import Header from "./../../componentes_globais/Header"
import Posts from "./Posts"
import NovoPost from "./NovoPost"

const URL_API = 'http://localhost:3000'

function Feed() {
  const [posts, setPosts] = useState([])
  const [erro, setErro] = useState('')

  async function carregarPosts() {
    try {
      const resposta = await fetch(`${URL_API}/posts`)
      const dados = await resposta.json()
      setPosts(dados)
      setErro('')
    } catch {
      setErro('Não consegui falar com o servidor. Ele está ligado?')
    }
  }

  useEffect(() => {
    carregarPosts()
  }, [])

  return (
    <>
      <Header />
      <Status />
      <NovoPost aoPostar={carregarPosts} />
      {erro && <p>{erro}</p>}
      {[...posts].reverse().map((p) => (
        <Posts key={p.id} post={p} aoCurtir={carregarPosts} />
      ))}
    </>
  )
}

export default Feed
