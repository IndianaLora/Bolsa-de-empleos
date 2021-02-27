import axios from "axios";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { FaWpforms } from "react-icons/fa";
import "./users.css";

export default function Registro() {
  const { register, handleSubmit, errors } = useForm();

  const history = useHistory();

  const onSubmit = (data) => {
    axios
      .post("http://localhost:3001/api/users/register", {
        username: data.username,
        password: data.password,
      })
      .then(function (res) {
        console.log(JSON.parse(res.request.response + "funciona"));
        history.push("/container");
      })
      .catch(function (err) {
        console.log(err+"no funciona");
      });
  };
  return (
    <div className="container">
      <form class="login-box" onSubmit={handleSubmit(onSubmit)}>
        <FaWpforms className="regis-img" />
        <strong className="text-center">Registro de usuario</strong>
        <input
          type="text"
          placeholder="Email (usuario):"
          name="username"
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
          type="submit"
          value="Enviar"
          className="btn btn-block btn-primary"
          onClick={onSubmit}
        />
      </form>
    </div>
  );
}
