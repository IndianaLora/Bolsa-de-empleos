import axios from "axios";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import "./login.css";

export default function Registro() {
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();
  console.log(errors);
  const onSubmit = (data) => {
    axios
      .post("/api/registro", {
        userName: data.usuario,
        password: data.password,
        email: data.email,
      })
      .then(function () {
        history.push("/container");
      })
      .catch(function () {
        alert("Error al registrar usuario");
      });
  };
  return (
    <div className="container">
      <form class="login-box" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Usuario:"
          name="usuario"
          ref={register({ required: true })}
        />
        {errors.usuario &&
          errors.usuario.type === "required" &&
          "Usuario requerido"}

        <input
          type="password"
          placeholder="Password:"
          name="password"
          ref={register({ required: true })}
        />
        {errors.password &&
          errors.password.type === "required" &&
          "Password requerido"}
        <input
          type="email"
          placeholder="Email:"
          name="email"
          ref={register({ required: true })}
        />
        {errors.email && errors.email.type === "required" && "Email requerido"}
        <input type="submit" value="Enviar" className="button" />
      </form>
    </div>
  );
}
