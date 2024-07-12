import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

function Contato() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function enviar(data) {
    console.log("Formulário enviado!");
    console.log(data);
  }

  return (
    <main>
      <form className="form-section" onSubmit={handleSubmit(enviar)}>
        <h1>Contato</h1>
        <hr />
        <div>
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            id="nome"
            className="form-control"
            {...register("nome", { required: true, maxLength: 150 })}
          />
          {errors.nome && <small className="invalid">O nome é inválido!</small>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            className="form-control"
            {...register("email", { required: "O email é obrigatório" })}
          />
          {errors.email && (
            <small className="invalid">{errors.email.message}</small>
          )}
        </div>
        <div>
          <label htmlFor="feedback">Comentários</label>
          <input
            type="text"
            id="feedback"
            className="form-control"
            {...register("feedback", {
              required: "O comentário é obrigatório",
              minLength: { value: 6, message: "Mínimo de 6 caracteres." },
            })}
          />
          {errors.feedback && (
            <small className="invalid">{errors.feedback.message}</small>
          )}
        </div>
        <Button variant="dark" className="mt-1 w-100" type="submit">
          Enviar
        </Button>
      </form>
    </main>
  );
}

export default Contato;
