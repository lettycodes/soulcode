import "./CardProduto.css";

function CardProduto(props) {
  return (
    <section className="card-produto">
      <p className="nome-produto">{props.nomeProduto}</p>
      <p className="produto-preco">
        {props.desconto > 0 ? (
          <>
            <span className="preco-original">{`R$ ${props.preco.toFixed(
              2
            )}`}</span>
            <div></div>
            <span className="preco-desconto">{`R$ ${(
              props.preco -
              (props.preco * props.desconto) / 100
            ).toFixed(2)}`}</span>
          </>
        ) : (
          <p>{`R$ ${props.preco.toFixed(2)}`}</p>
        )}
        {props.desconto > 0 && (
          <span className="desconto">{`${props.desconto}% OFF`}</span>
        )}
      </p>
    </section>
  );
}

export default CardProduto;
