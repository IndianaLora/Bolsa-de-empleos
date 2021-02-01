import { useForm } from "react-hook-form";
import "./login.css";
export default function Login() {
  const { register, handleSubmit, errors } = useForm();
  console.log(errors);
  const onSubmit = (data) => console.log(data.usuario, data.password);
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
