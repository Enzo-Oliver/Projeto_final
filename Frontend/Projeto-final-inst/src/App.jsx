import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import img0 from "./assets/imagens/img0.jpg";
import Header from "./cadrastro/Header";
import Foto_cadrastro from "./cadrastro/Foto_cadrastro";
import Form from "./cadrastro/Form";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Feed from "./Projeto-final-inst/Feed";

function App() {
  return (
    <>
    {/* Pagina cadrastro: */}
          <Header />
          <Foto_cadrastro/>
          <Form/>
    {/* Pagina feed: */}


    </>
  );
}

export default App;
