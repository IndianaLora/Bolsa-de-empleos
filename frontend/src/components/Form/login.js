import axios from "axios";
import { useForm } from "react-hook-form";
import "./login.css";
export default function Login() {
  const { register, handleSubmit, errors } = useForm();
  console.log(errors);
  const onSubmit = (data) => {
    axios
      .post("https://bolsaempleoapi.azurewebsites.net/login/signIn", {
        username: data.usuario,
        password: data.password,
      })
      .then(function (res) {
        console.log(JSON.parse(res.request.response));
      })
      .catch(function (err) {
        console.log(JSON.parse(err.request.response));
      });

    let p = new Promise((resolve, rejected) => {
      if (data.usuario && data.password != null) {
        resolve("Login succesfull");
      } else {
        rejected("Unsuccesfull attempt to login in");
      }
    });
    p.then(
      (message) => {
        console.log(message);
      },
      p.catch((message) => {
        console.log(message);
      })
    );
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
        <input type="submit" value="Enviar" className="button" />
      </form>
    </div>
  );
}
