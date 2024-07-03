// Importante: importar para que os estilos façam parte do projeto
import "./Mensagem.css";

// Exercício: aplicar props ao componente Mensagem, as propriedades são: textoTitulo, nomeAutor, paragrafo e linkImagem
// Apadapte o componente para receber props

function Mensagem(props) {
  // const textoTitulo = "As batatas quando nascem se esparramam pelo chão";
  // const nomeAutor = "J. Almir";
  // const linkImagem = "https://picsum.photos/200";

  return (
    <>
      {/* <section className="mensagem-corpo">
        <h2 className="mensagem-titulo">{textoTitulo.toLocaleUpperCase()}</h2>
        <img src={linkImagem} alt="Imagem da mensagem" />
        <p className="paragrafo">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, vel.
        </p>
        <small>Criado por: {nomeAutor}</small>
      </section> */}

      <section className="mensagem-corpo">
        <h2 className="mensagem-titulo">{props.textoTitulo}</h2>
        <img src={props.linkImagem} alt="Imagem aleatória" />
        <p className="paragrafo">{props.paragrafo}</p>
        <small>{props.nomeAutor}</small>
      </section>
    </>
  );
}

export default Mensagem;
