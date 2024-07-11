import { Link } from "react-router-dom";

function Rodape() {
  return (
    <>
      <footer className="bg-dark mt-auto w-100">
        <div className="text-center p-3">
          <p className=" text-white">
            &copy; 2024 My Task. Todos os direitos reservados.
          </p>
          <Link to="/politicas">Políticas de Privacidade</Link>
        </div>
      </footer>
    </>
  );
}

export default Rodape;
