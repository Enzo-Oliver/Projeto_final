import { useState } from 'react'
import { reduzirImagem } from '../../imagem'

const URL_API = 'http://localhost:3000'

function NovoPost({ aoPostar }) {
  const logado = JSON.parse(localStorage.getItem('usuario'))

  const [imagem, setImagem] = useState('')
  const [texto, setTexto] = useState('')
  const [erro, setErro] = useState('')
  const [enviando, setEnviando] = useState(false)

  if (!logado) return null

  async function escolherFoto(e) {
    const arquivo = e.target.files[0]
    if (!arquivo) return

    try {
      const reduzida = await reduzirImagem(arquivo, 1080)
      setImagem(reduzida)
      setErro('')
    } catch (err) {
      setErro(err.message)
    }
  }

  async function publicar(e) {
    e.preventDefault()

    if (!imagem) {
      setErro('Escolha uma foto para postar.')
      return
    }

    setEnviando(true)
    try {
      const resposta = await fetch(`${URL_API}/posts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ usuario: logado.nome, imagem: imagem, texto: texto }),
      })
      const dados = await resposta.json()

      if (!resposta.ok) {
        setErro(dados.erro)
        return
      }

      setImagem('')
      setTexto('')
      setErro('')
      e.target.reset()
      aoPostar()
    } catch {
      setErro('Não consegui falar com o servidor. Ele está ligado?')
    } finally {
      setEnviando(false)
    }
  }

  return (
    <div className="container py-3">
      <div className="row justify-content-center">
        <div className="col-8 col-md-8 col-lg-6">
          <form className="border rounded p-3" onSubmit={publicar}>
            <h6 className="mb-3">Novo post</h6>

            <input
              className="form-control mb-3"
              type="file"
              accept="image/*"
              onChange={escolherFoto}
            />

            {imagem && (
              <img src={imagem} alt="Prévia" className="img-fluid rounded mb-3" />
            )}

            <textarea
              className="form-control mb-3"
              rows="2"
              placeholder="Escreva uma descrição..."
              value={texto}
              onChange={(e) => setTexto(e.target.value)}
            />

            {erro && <p className="text-danger">{erro}</p>}

            <button type="submit" className="btn btn-primary w-100" disabled={enviando}>
              {enviando ? 'Publicando...' : 'Publicar'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default NovoPost
