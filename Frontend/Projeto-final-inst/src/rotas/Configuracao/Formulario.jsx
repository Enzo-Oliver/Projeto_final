import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { reduzirImagem } from '../../imagem'

const URL_API = 'http://localhost:3000'

function Formulario() {
  const logado = JSON.parse(localStorage.getItem('usuario'))
  const navegar = useNavigate()

  const [nome, setNome] = useState(logado ? logado.nome : '')
  const [bio, setBio] = useState(logado ? logado.bio : '')
  const [foto, setFoto] = useState(logado ? logado.foto : '')
  const [erro, setErro] = useState('')
  const [mensagem, setMensagem] = useState('')

  if (!logado) {
    return (
      <p className="text-center mt-5">
        Você precisa <a href="/login">fazer login</a> primeiro.
      </p>
    )
  }

  async function escolherFoto(e) {
    const arquivo = e.target.files[0]
    if (!arquivo) return

    try {
      const imagem = await reduzirImagem(arquivo, 400)
      setFoto(imagem)
      setErro('')
    } catch (err) {
      setErro(err.message)
    }
  }

  async function salvar(e) {
    e.preventDefault()
    setErro('')
    setMensagem('')

    try {
      const resposta = await fetch(`${URL_API}/usuarios/${logado.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome: nome, bio: bio, foto: foto }),
      })
      const dados = await resposta.json()

      if (!resposta.ok) {
        setErro(dados.erro)
        return
      }

      localStorage.setItem('usuario', JSON.stringify(dados))
      setMensagem('Alterações salvas!')
    } catch {
      setErro('Não consegui falar com o servidor. Ele está ligado?')
    }
  }

  return (
    <div className="d-flex justify-content-center align-items-center py-5">
      <form
        className="border border-2 border-white p-4 rounded"
        style={{ width: "400px" }}
        onSubmit={salvar}
      >
        <div className="text-center mb-3">
          <img
            src={foto}
            alt="Foto de perfil"
            className="rounded-circle object-fit-cover"
            style={{ width: "120px", height: "120px" }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="nomeUsuario" className="form-label">
            Trocar nome de usuário:
          </label>
          <input
            className="form-control form-control-sm"
            type="text"
            id="nomeUsuario"
            placeholder="Novo nome de usuário"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="bioUsuario" className="form-label">
            Trocar bio:
          </label>
          <textarea
            className="form-control"
            id="bioUsuario"
            placeholder="Escreva sua bio"
            rows="3"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="uploadFoto" className="form-label">
            Escolha sua foto de perfil
          </label>
          <input
            className="form-control"
            type="file"
            id="uploadFoto"
            accept="image/*"
            onChange={escolherFoto}
          />
        </div>

        {erro && <p className="text-danger">{erro}</p>}
        {mensagem && <p className="text-success">{mensagem}</p>}

        <div className="d-flex gap-2">
          <button type="submit" className="btn btn-primary w-100">
            Salvar
          </button>
          <button
            type="button"
            className="btn btn-secondary w-100"
            onClick={() => navegar('/perfil')}
          >
            Ver perfil
          </button>
        </div>
      </form>
    </div>
  );
}

export default Formulario;
