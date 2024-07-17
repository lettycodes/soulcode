import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Ajuda from "./pages/Ajuda";
import NotFound from "./pages/NotFound";
import Menu from "./components/Menu";
import Rodape from "./components/Rodape";
import PoliticasDePrivacidade from "./pages/PoliticasDePrivacidade";
import NovaTarefa from "./pages/NovaTarefa";
import Tarefas from "./pages/Tarefas";
import EditarTarefa from "./pages/EditarTarefa";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/config";

// BrowseRouter: componente essencial para conduzir o roteamento no navegador
// Route: indicamos a rota (path) e o elemento que será exibido na tela

function App() {
  // O estado de usuario indica se ele está logado ou não na aplicação
  // null = deslogado
  const [usuarioLogado, setUsuarioLogado] = useState(null);

  useEffect(() => {
    // Monitora/detecta o usuário conectado/desconectado
    onAuthStateChanged(auth, (user) => {
      // user é nulo -> usuário deslogou
      // se tem objeto -> usuário logou
      setUsuarioLogado(user);
    });
  }, []);

  return (
    <div className="d-flex flex-column min-vh-100">
      <BrowserRouter>
        <Menu usuario={usuarioLogado} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/ajuda" element={<Ajuda />} />
          <Route path="/politicas" element={<PoliticasDePrivacidade />} />
          <Route path="/tarefas" element={<Tarefas />} />
          <Route path="/tarefas/adicionar" element={<NovaTarefa />} />
          <Route path="/tarefas/editar/:id" element={<EditarTarefa />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Rodape />
      </BrowserRouter>
      <Toaster position="bottom-right" />
    </div>
  );
}

export default App;
