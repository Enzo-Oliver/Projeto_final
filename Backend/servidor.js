import express from 'express'
import cors from 'cors'
import fs from 'fs'

const app = express()
const PORTA = 3000
const ARQUIVO = 'dados.json'

app.use(cors())
app.use(express.json({ limit: '10mb' }))

function carregar() {
  if (!fs.existsSync(ARQUIVO)) {
    return {
      usuarios: [
        {
          id: 1, nome: 'enzooliverr_', email: 'enzo@gmail.com', senha: '123456',
          bio: 'Tec. Redes | ADS - Senac', foto: 'https://placehold.co/300x300',
          seguidores: 828, seguindo: 1059, link: 'https://github.com/Enzo-Oliver',
        },
      ],
      posts: [
        { id: 1, usuario: 'opovoonline', imagem: 'https://placehold.co/600x400', texto: 'Popular Atacadista inaugura unidade', curtidas: 0 },
      ],
      stories: [
        { id: 1, name: 'usuario', img: 'https://placehold.co/100x100' },
        { id: 2, name: 'usuario', img: 'https://placehold.co/100x100' },
      ],
    }
  }
  const texto = fs.readFileSync(ARQUIVO, 'utf-8')
  return JSON.parse(texto)
}

function salvar() {
  fs.writeFileSync(ARQUIVO, JSON.stringify(dados, null, 2))
}

let dados = carregar()

function publico(u) {
  return {
    id: u.id,
    nome: u.nome,
    bio: u.bio ?? '',
    foto: u.foto ?? 'https://placehold.co/300x300',
    seguidores: u.seguidores ?? 0,
    seguindo: u.seguindo ?? 0,
    link: u.link ?? '',
  }
}

app.get('/', (req, res) => {
  res.send('Olá! O servidor está funcionando.')
})

app.get('/posts', (req, res) => {
  res.json(dados.posts)
})

app.post('/posts', (req, res) => {
  const { usuario, imagem, texto } = req.body

  if (!imagem || imagem.trim() === '') {
    return res.status(400).json({ erro: 'Coloque a imagem do post.' })
  }

  const novo = { id: Date.now(), usuario, imagem, texto, curtidas: 0 }
  dados.posts.push(novo)
  salvar()
  res.status(201).json(novo)
})

app.patch('/posts/:id', (req, res) => {
  const id = Number(req.params.id)
  const post = dados.posts.find((p) => p.id === id)

  if (!post) {
    return res.status(404).json({ erro: 'Post não encontrado.' })
  }

  post.curtidas = post.curtidas + 1
  salvar()
  res.json(post)
})

app.delete('/posts/:id', (req, res) => {
  const id = Number(req.params.id)
  dados.posts = dados.posts.filter((p) => p.id !== id)
  salvar()
  res.status(204).end()
})

app.get('/stories', (req, res) => {
  res.json(dados.stories)
})

app.post('/login', (req, res) => {
  const { email, senha } = req.body
  const usuario = dados.usuarios.find((u) => u.email === email && u.senha === senha)

  if (!usuario) {
    return res.status(401).json({ erro: 'Email ou senha errados.' })
  }

  res.json(publico(usuario))
})

app.get('/usuarios/:nome', (req, res) => {
  const usuario = dados.usuarios.find((u) => u.nome === req.params.nome)

  if (!usuario) {
    return res.status(404).json({ erro: 'Usuário não encontrado.' })
  }

  res.json(publico(usuario))
})

app.patch('/usuarios/:id', (req, res) => {
  const id = Number(req.params.id)
  const usuario = dados.usuarios.find((u) => u.id === id)

  if (!usuario) {
    return res.status(404).json({ erro: 'Usuário não encontrado.' })
  }

  const { nome, bio, foto } = req.body

  if (nome !== undefined) {
    if (nome.trim() === '') {
      return res.status(400).json({ erro: 'O nome de usuário não pode ficar vazio.' })
    }
    const existe = dados.usuarios.find((u) => u.nome === nome.trim() && u.id !== id)
    if (existe) {
      return res.status(409).json({ erro: 'Esse nome de usuário já está em uso.' })
    }

    dados.posts.forEach((p) => {
      if (p.usuario === usuario.nome) p.usuario = nome.trim()
    })
    usuario.nome = nome.trim()
  }

  if (bio !== undefined) usuario.bio = bio
  if (foto !== undefined) usuario.foto = foto

  salvar()
  res.json(publico(usuario))
})

app.listen(PORTA, () => {
  console.log(`Servidor rodando em http://localhost:${PORTA}`)
})
