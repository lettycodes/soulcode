import "./Card.css";
import PropTypes from "prop-types";

function Card(props) {
  return (
    <>
      <article className="card">
        <section className="card-image">
          <img src={props.imagem} alt="Capa do jogo" className="card-image" />
        </section>
        <section className="card-content">
          <p className="card-game-name">{props.jogo}</p>
          <p className="card-description">{props.descricao}</p>

          <button type="button" className="card-btn">
            Leia mais
          </button>
        </section>
      </article>
    </>
  );
}

Card.propTypes = {
  imagem: PropTypes.string.isRequired,
  jogo: PropTypes.string.isRequired,
  descricao: PropTypes.string.isRequired,
};

export default Card;
