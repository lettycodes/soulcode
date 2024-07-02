import "./Postagem.css";

function Postagem() {
  const tituloPostagem = "Título da Postagem";
  const descricaoPostagem =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque cumque hic dolorum labore sit sunt beatae placeat laborum sapiente maxime aliquam temporibus doloremque, delectus non aperiam, nemo aliquid inventore ipsum earum nam. Similique cumque quas adipisci, autem exercitationem odio unde reprehenderit atque doloremque fugiat. Vero quasi culpa nesciunt minima consectetur!";
  const imgPostagem =
    "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <section className="postagens-card">
      <h2 className="titulo-postagem">{tituloPostagem}</h2>
      <p className="descricao-postagem">{descricaoPostagem}</p>
      <img
        src={imgPostagem}
        alt="Imagem de uma mesa com um notebook, xícara de café, bloco de notas com uma caneta e um celular"
        className="img-postagem"
      />
    </section>
  );
}

export default Postagem;
