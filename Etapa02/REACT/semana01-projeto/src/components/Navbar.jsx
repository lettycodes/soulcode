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
          <li>
            <ul className="nav-list">
              <a href="#">Jogos Populares</a>
            </ul>
            <ul>
              <a href="#">Tutoriais</a>
            </ul>
            <ul>
              <a href="#">Todas as análises</a>
            </ul>
          </li>
        </section>
      </nav>
    </>
  );
}

export default Navbar;
