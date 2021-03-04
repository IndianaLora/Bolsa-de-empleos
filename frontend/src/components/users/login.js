import axios from "axios";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { Button, notification } from "antd";
import "./users.css";

export default function Login() {
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    const openNotification = () => {
      const args = {
        message: "Notification Title",
        description:
          "I will never close automatically. This is a purposely very very long description that has many many characters and words.",
        duration: 0,
      };
      notification.open(args);
    };
    openNotification(); //TODO: when program loadnotification to tell the client to login before post a job
    let loginUrl = "http://localhost:3001/api/auth/login";
    axios
      .post(loginUrl, {
        data: {
          username: data.username,
          password: data.password,
        },
      })
      .then(function (res) {
        console.log(res.data.token);
        localStorage.setItem("token", res.data.token);
        console.log(localStorage.getItem("token"));
        // alert("Bienvenido ya puedes postear tu trabajo");
        document.getElementById("notification").innerHTML = openNotification;

        // history.push("/container");
      })
      .catch(function (err) {
        console.error(err);
      });
  };

  return (
    <div className="container">
      <form class="login-box" onSubmit={handleSubmit(onSubmit)}>
        <div id="notification"></div>
        <FaRegUser className="regis-img" />
        <strong className="text-center">Accede a tu cuenta</strong>

        <input
          type="text"
          placeholder="Usuario:"
          name="username"
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
