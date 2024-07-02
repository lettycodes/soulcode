// jsx => JavaScript extended
// vai permitir escrever código "HTML" dentro do js
// Declarativa
// Açúcar sintático => é uma sintaxe dentro da linguagem de programação que tem por finalidade tornar suas construções mais fáceis de serem lidas e expressas

import Titulo from "./components/Titulo";
import Mensagem from "./components/Mensagem";

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

    <main>
      <Titulo />
      <Mensagem />
      <Mensagem />
      <Mensagem />
      <Mensagem />
      <Mensagem />
    </main>
  );
}

export default App;
