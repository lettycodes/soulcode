import "./App.css";
import CardAluno from "./components/CardAluno";
import CardProduto from "./components/CardProduto";
// import Blog from "./components/Blog";
// import Footer from "./components/Footer";
// import Header from "./components/Header";

function App() {
  return (
    <>
      {/* <main>
        <Header />
        <Blog />
      </main>
      <Footer /> */}

      <CardAluno nome="Cássio Ramos" serie="8ª Série" media={8.5} />
      <CardAluno nome="Roger Gomes" serie="8ª Série" media={6} />

      <CardProduto
        nomeProduto="PS5 Console Slim Bundle Ratchet Clank and Returnal Cor Branco"
        preco={4399}
        desconto={14}
      />
    </>
  );
}

export default App;
