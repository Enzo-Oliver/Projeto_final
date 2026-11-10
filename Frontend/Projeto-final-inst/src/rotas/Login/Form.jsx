import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const URL_API = 'http://localhost:3000'

function Form() {
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [erro, setErro] = useState('')
  const navegar = useNavigate()

  async function entrar(e) {
    e.preventDefault()
    const resposta = await fetch(`${URL_API}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email, senha: senha }),
    })
    const dados = await resposta.json()

    if (!resposta.ok) {
      setErro(dados.erro)
      return
    }

    localStorage.setItem('usuario', JSON.stringify(dados))
    navegar('/feed')
  }

  return (
    <div style={{ flex: "0 1 380px" }}>
      <form className="p-4" onSubmit={entrar}>
        <div className="mb-4">
          <label htmlFor="email" className="form-label">
            Email
          </label>

          <input
            placeholder="usuario@gmail.com"
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="form-label">
            Password
          </label>

          <input
            placeholder="********"
            type="password"
            className="form-control"
            id="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>

        {erro && <p>{erro}</p>}

        <button type="submit" className="btn btn-primary w-100">
          Entrar
        </button>
      </form>
    </div>
  );
}

export default Form;
