import express from 'express'
import cors from 'cors'
import fs from 'fs'

const app = express()
const PORTA = 3000
const ARQUIVO = 'tarefas.json'

app.use(cors())
app.use(express.json())

let tarefas = [
  { id: 1, texto: 'Instalar o Node.js', feita: true },
  { id: 2, texto: 'Criar a API', feita: false },
]

app.get('/', (req, res) => {
  res.send('Olá! O servidor está funcionando.')
})

app.get('/tarefas', (req, res) => {
  res.json(tarefas)
})

app.post('/tarefas', (req, res) => {
  const texto = req.body.texto

  if (!texto || texto.trim() === '') {
    return res.status(400).json({
      erro: 'Escreva o texto da tarefa.'
    })
  }

  const nova = {
    id: Date.now(),
    texto: texto.trim(),
    feita: false
  }

  tarefas.push(nova)

  res.status(201).json(nova)
})

app.patch('/tarefas/:id', (req, res) => {
  const id = Number(req.params.id)

  const tarefa = tarefas.find((t) => t.id === id)

  if (!tarefa) {
    return res.status(404).json({
      erro: 'Tarefa não encontrada.'
    })
  }

  tarefa.feita = !tarefa.feita

  res.json(tarefa)
})

app.delete('/tarefas/:id', (req, res) => {
  const id = Number(req.params.id)

  tarefas = tarefas.filter((t) => t.id !== id)

  res.status(204).end()
})

app.delete('/tarefas/:id', (req, res) => {
  const id = Number(req.params.id)
 
  tarefas = tarefas.filter((t) => t.id !== id)
 
  res.status(204).end()
})

app.listen(PORTA, () => {
  console.log(`Servidor rodando em http://localhost:${PORTA}`)
})

function carregar() {
  if (!fs.existsSync(ARQUIVO)) {
    return []
  }
  const texto = fs.readFileSync(ARQUIVO, 'utf-8')
  return JSON.parse(texto)
}

function salvar() {
  fs.writeFileSync(ARQUIVO, JSON.stringify(tarefas, null, 2))
}
 
// na rota POST
tarefas.push(nova)
salvar()
 
// na rota PATCH
tarefa.feita = !tarefa.feita
salvar()
 
// na rota DELETE
tarefas = tarefas.filter((t) => t.id !== id)
salvar()
 
let tarefas = carregar()

async function adicionarTarefa(texto) {
  await fetch(URL_API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ texto: texto }),
  })
  carregarTarefas()
}
	async function alternarTarefa(id) {
  await fetch(`${URL_API}/${id}`, { method: 'PATCH' })
  carregarTarefas()
}
 
async function removerTarefa(id) {
  await fetch(`${URL_API}/${id}`, { method: 'DELETE' })
  carregarTarefas()
}

	async function carregarTarefas() {
  try {
    const resposta = await fetch(URL_API)
    const dados = await resposta.json()
    setTarefas(dados)
    setErro('')
  } catch {
    setErro('Não consegui falar com o servidor. Ele está ligado?')
  }
  setCarregando(false)
}