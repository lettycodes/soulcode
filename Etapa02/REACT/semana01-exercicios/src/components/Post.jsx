/* 1. Crie um componente Post que possui um titulo e uma descrição. Ao clicar no botão de curtir deve aparecer no componente que o post está curtido, e ao clicar novamente no botão ele faz a ação de "descurtir" o post. Dica: o estado alterna entre true e false. */
import "./Post.css";
import { useState } from "react";

const Post = ({ titulo, descricao }) => {
  const [curtir, setCurtir] = useState(false);

  const handleCurtir = () => {
    setCurtir(!curtir);
  };

  return (
    <section className="post">
      <h3>{titulo}</h3>
      <p>{descricao}</p>
      <button onClick={handleCurtir}>{curtir ? "Descurtir" : "Curtir"}</button>
    </section>
  );
};

export default Post;
