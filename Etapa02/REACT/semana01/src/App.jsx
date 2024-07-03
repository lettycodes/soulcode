// jsx => JavaScript extended
// vai permitir escrever código "HTML" dentro do js
// Declarativa
// Açúcar sintático => é uma sintaxe dentro da linguagem de programação que tem por finalidade tornar suas construções mais fáceis de serem lidas e expressas

import Blog from "./components/CorrecaoBlog";
import Navbar from "./components/Navbar";
import Rodape from "./components/CorrecaoRodape";
// import Mensagem from "./components/Mensagem";

// Componente principal da aplicação
function App() {
  // const nome = "Soulcode";

  return (
    // <section>
    //   <h1>React</h1>
    //   <p>Olá, {nome.toUpperCase()}!</p>
    //   <img src="https://picsum.photos/200" />
    //   <button>Apertar</button>
    //   <p>Soma: {20 + 5}</p>
    // </section>
    <>
      {/* <Mensagem
        textoTitulo="As batatas quando nascem se esparramam pelo chão"
        nomeAutor="Criado por: J. Almir"
        paragrafo="Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, vel."
        linkImagem="https://picsum.photos/200"
      /> */}
      <Navbar logado={true} nomeUsuario="Batata" />
      <Navbar logado={false} />
      <Blog />
      <Rodape />
    </>
  );
}

export default App;
