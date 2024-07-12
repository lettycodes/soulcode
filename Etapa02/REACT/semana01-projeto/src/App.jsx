import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Cadastro from "./pages/Cadastro";
import Contato from "./pages/Contato";
import Login from "./pages/Login";
import Menu from "./components/Menu";

function App() {
  return (
    <>
      <div className="d-flex flex-column min-vh-100">
        <BrowserRouter>
          <Menu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
