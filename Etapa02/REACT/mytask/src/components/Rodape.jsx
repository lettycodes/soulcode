import { Link } from "react-router-dom";

function Rodape() {
  return (
    <>
      <footer className="bg-dark">
        <div className="text-center p-3">
          <Link to="/politicas">Políticas de Privacidade</Link>
        </div>
      </footer>
    </>
  );
}

export default Rodape;
