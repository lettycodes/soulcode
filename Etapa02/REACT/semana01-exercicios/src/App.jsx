import "./App.css";
import Post from "./components/Post";
import ConversorTemperatura from "./components/ConversorTemperatura";
// import CardAluno from "./components/CardAluno";
// import CardProduto from "./components/CardProduto";
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

      {/* <CardAluno nome="Cássio Ramos" serie="8ª Série" media={8.5} />
      <CardAluno nome="Roger Gomes" serie="8ª Série" media={6} /> */}

      {/* <CardProduto
        nomeProduto="PS5 Console Slim Bundle Ratchet Clank and Returnal Cor Branco"
        preco={4399}
        desconto={14}
      /> */}

      <Post
        titulo="Post 1"
        descricao="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, dolorum quae cum quidem ducimus dicta nobis impedit deleniti corporis sunt!"
      />
      <Post
        titulo="Post 2"
        descricao="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde, dolorum quae cum quidem ducimus dicta nobis impedit deleniti corporis sunt!"
      />

      <ConversorTemperatura />
    </>
  );
}

export default App;
