import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./rotas/Login/Login";
import Feed from "./rotas/Feed/Feed";
import Perfil from "./rotas/perfil/perfil";
import Configuracao from "./rotas/Configuracao/Configuracao";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/configuracao" element={<Configuracao />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
