import "./Form.css";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
export default function Container() {
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();
  const onSubmit = (data) => {
    console.log(data);
    history.push("./components/Form/post");
  };

  return (
    <div id="container" className="container">
      <form id="form" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="  Compañía:"
          name="compañía"
          ref={register({ required: true, minLength: 2 })}
          id="form-input"
        />
        <select
          placeholder=" Tipo :"
          name="tipo"
          ref={register}
          id="form-input"
        >
          <option value="">Agente</option>
          <option value="">Supervisor</option>
          <option value=""> Gerente</option>
        </select>
        {errors.Tipo && <p>Debe llenar este campo</p>}
        <input
          type="text"
          placeholder=" Logo (opcional):"
          name=" logo"
          ref={register}
          id="form-input"
        />
        <input
          type="text"
          placeholder="URL (opcional):"
          name="url"
          ref={register}
          id="form-input"
        />
        <input
          type="text"
          placeholder="(puesto):"
          name="posicion"
          ref={register}
          id="form-input"
        />
        <select
          name="ubicacion"
          placeholder="Ubicación:"
          ref={register}
          id="form-input"
        >
          <option value=""> Santo Domingo</option>
          <option value=""> Zona oriental</option>
        </select>
        <input
          type="text"
          name="categoria"
          ref={register}
          placeholder="categoria"
          id="form-input"
        />
        <input
          type="text"
          placeholder=" Descripción :"
          name="descripcion"
          ref={register}
          id="form-input"
        />
        <input
          type="text"
          placeholder="Cómo aplicar:"
          name="comoAplicar"
          ref={register}
          id="form-input"
        />
        <input
          type="text"
          placeholder=" Email (Compañía):"
          name="email"
          ref={register}
          id="form-input"
        />
        <div id="message">
          <textarea
            placeholder="Escribe una descripcion para el puesto de trabajo"
            id="form-input"
            name="message"
          >
            {" "}
          </textarea>
        </div>
        <input type="submit" value="Enviar" className="button" />
      </form>
    </div>
  );
}
