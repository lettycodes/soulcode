import "./Banner.css";
import imagem from "../assets/banner.png";

function Banner() {
  return (
    <section className="banner-section">
      <img
        src={imagem}
        alt="Banner do site"
        className="banner"
      />
    </section>
  );
}

export default Banner;
