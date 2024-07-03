import "./CardAluno.css";

function CardAluno(props) {
  return (
    <>
      <section className="card-aluno">
        <h3 className="nome-aluno">Nome: {props.nome}</h3>
        <p>Série: {props.serie}</p>
        <p>Média: {props.media}</p>
        <p className={`${props.media >= 7 ? "aprovado" : "reprovado"}`}>
          {props.media >= 7 ? "Aprovado!" : "Reprovado!"}
        </p>
      </section>
    </>
  );
}

export default CardAluno;
