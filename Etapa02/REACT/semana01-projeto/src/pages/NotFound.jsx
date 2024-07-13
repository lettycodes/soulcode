import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <Container>
        <h1 className="text-center m-4">Página não encontrada!</h1>
        <p className="text-center">
          Voltar para <Link to="/">página inicial</Link>.
        </p>
      </Container>
    </>
  );
}

export default NotFound;
