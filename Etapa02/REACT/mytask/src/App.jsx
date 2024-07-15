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
import { Toaster } from "react-hot-toast";

// BrowseRouter: componente essencial para conduzir o roteamento no navegador
// Route: indicamos a rota (path) e o elemento que será exibido na tela

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/ajuda" element={<Ajuda />} />
          <Route path="/politicas" element={<PoliticasDePrivacidade />} />
          <Route path="/tarefas" element={<Tarefas />} />
          <Route path="/tarefas/adicionar" element={<NovaTarefa />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Rodape />
      </BrowserRouter>
      <Toaster position="bottom-right" />
    </div>
  );
}

export default App;
