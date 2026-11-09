import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Header from "./componentes_globais/Header";
import Foto_cadrastro from "./rotas/Login/Foto_cadrastro";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useState, useEffect } from 'react'

// const URL_API = 'http://localhost:3000/tarefas'
 
// function App() {
//   const [tarefas, setTarefas] = useState([])}
//   const [carregando, setCarregando] = useState(true)
//   const [erro, setErro] = useState('')

// async function carregarTarefas() {
//   const resposta = await fetch(URL_API)
//   const dados = await resposta.json()
//   setTarefas(dados)
// }

// useEffect(() => {
//   carregarTarefas()
// }, [])

// {erro && <p className="erro">{erro}</p>}
 
// {!carregando && !erro && tarefas.length === 0 && (
//   <p>Nenhuma tarefa por aqui. Que tal adicionar a primeira?</p>
// )}

import Login from "./rotas/Login/Login";
import Feed from "./rotas/Feed/Feed";
import Perfil from "./rotas/perfil/perfil";
import Configuracao from "./rotas/Configuracao/Formulario";

function App() {
  return (
    <BrowserRouter>
      <Routes> 
        <Route path="/login" element={<Login />}/>
        <Route path="/feed" element={<Feed />}/>
        <Route path="/perfil" element={<Perfil />}/> 
        <Route path="/configuracao" element={<Configuracao />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
