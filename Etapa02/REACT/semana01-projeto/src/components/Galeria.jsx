import "./Galeria.css";
import Card from "./Card";
import thesims4 from "../assets/thesims4.jpeg";
import overwatch2 from "../assets/overwatch2.jpg";
import fallguys from "../assets/fallguys.jpg";
import cyberpunk2077 from "../assets/cyberpunk2077.jpeg";
import streetfighter from "../assets/streetfighter.jpg";
import shenmue3 from "../assets/shenmue3.jpeg";
import crazytaxi from "../assets/crazytaxi.jpg";

const cards = [
  {
    id: 1,
    imagem: thesims4,
    jogo: "The Sims 4",
    descricao:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quas porro tempora velit eius, nesciunt voluptas sit ea molestias esse consequuntur distinctio qui. Incidunt voluptatum quisquam consectetur doloremque alias ea!",
  },
  {
    id: 2,
    imagem: overwatch2,
    jogo: "Overwatch 2",
    descricao:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quas porro tempora velit eius, nesciunt voluptas sit ea molestias esse consequuntur distinctio qui. Incidunt voluptatum quisquam consectetur doloremque alias ea!",
  },
  {
    id: 3,
    imagem: fallguys,
    jogo: "Fall Guys",
    descricao:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quas porro tempora velit eius, nesciunt voluptas sit ea molestias esse consequuntur distinctio qui. Incidunt voluptatum quisquam consectetur doloremque alias ea!",
  },
  {
    id: 4,
    imagem: cyberpunk2077,
    jogo: "Cyberpunk 2077",
    descricao:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quas porro tempora velit eius, nesciunt voluptas sit ea molestias esse consequuntur distinctio qui. Incidunt voluptatum quisquam consectetur doloremque alias ea!",
  },
  {
    id: 5,
    imagem: streetfighter,
    jogo: "Street Fighter",
    descricao:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quas porro tempora velit eius, nesciunt voluptas sit ea molestias esse consequuntur distinctio qui. Incidunt voluptatum quisquam consectetur doloremque alias ea!",
  },
  {
    id: 6,
    imagem: shenmue3,
    jogo: "Shenmue III",
    descricao:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quas porro tempora velit eius, nesciunt voluptas sit ea molestias esse consequuntur distinctio qui. Incidunt voluptatum quisquam consectetur doloremque alias ea!",
  },
  {
    id: 7,
    imagem: crazytaxi,
    jogo: "Crazy Taxi",
    descricao:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quas porro tempora velit eius, nesciunt voluptas sit ea molestias esse consequuntur distinctio qui. Incidunt voluptatum quisquam consectetur doloremque alias ea!",
  },
];

function Galeria() {
  return (
    <section className="gallery">
      {cards.map((card) => (
        <Card
          key={card.id}
          imagem={card.imagem}
          jogo={card.jogo}
          descricao={card.descricao}
        />
      ))}
    </section>
  );
}

export default Galeria;
