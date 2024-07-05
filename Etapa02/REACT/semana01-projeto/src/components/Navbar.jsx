import "./Navbar.css";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <>
      <nav>
        <a href="#">
          <img src={logo} alt="Logo do site" className="logo" />
        </a>
        <section className="section-links">
          <button
            onClick={() => {
              alert("Área de membros em manutenção!");
            }}
            className="btn"
          >
            Entrar
          </button>
          <a href="#">Jogos Populares</a>
          <a href="#">Tutoriais</a>
          <a href="#">Todas as análises</a>
        </section>
      </nav>
    </>
  );
}

export default Navbar;
