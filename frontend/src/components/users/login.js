import axios from "axios"; //Funciona 'fetch' permite conectarte la API
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import "./users.css";

export default function Login() {
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm();

  //Funcion que maneja los datos que son enviados atraves del formulario de Login
  //La informacion Formulario login se uarda en 'data'

  const onSubmit = (data) => {
    let loginUrl = "http://localhost:3001/api/users/login";
    axios
      .get(loginUrl, {
        params: {
          username: data.usuario,
          password: data.password,
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch(function (err) {
        console.log("mal");
      });
  };

  return (
    <div className="container">
      <form class="login-box" onSubmit={handleSubmit(onSubmit)}>
        <FaRegUser className="regis-img" />
        <strong className="text-center">Accede a tu cuenta</strong>

        <input
          type="text"
          placeholder="Usuario:"
          name="usuario"
          ref={register({ required: true })}
        />

        {
          //prevencion de errores
          errors.usuario &&
            errors.usuario.type === "required" &&
            "Usuario requerido"
        }

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
          value="Acceder"
          className="btn btn-block btn-secondary"
        />
        <button
          onClick={() => {
            history.push("/registro");
          }}
          className="btn btn-sm btn-primary"
        >
          Registrarse
        </button>
      </form>
    </div>
  );
}
