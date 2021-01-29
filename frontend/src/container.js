import "./App.css";
import { useForm } from "react-hook-form";

export default function Container() {
  const { register, handleSubmit, errors } = useForm();
  // var posicion = {};
  const onSubmit = (data) => console.log(data);

  return (
    <div id="container">
      <form id="form" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="  Compañía:"
          name="Compañía"
          ref={register({ required: true, minLength: 2 })}
          id="form-input"
        />
        <select
          placeholder=" Tipo :"
          name="Tipo"
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
          name=" Logo"
          ref={register}
          id="form-input"
        />
        <input
          type="text"
          placeholder="URL (opcional):"
          name="URL "
          ref={register}
          id="form-input"
        />
        <input
          type="text"
          placeholder="(puesto):"
          name="Posición"
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
          name="Categoría"
          ref={register}
          placeholder="categoria"
          id="form-input"
        />
        <input
          type="text"
          placeholder=" Descripción :"
          name=" Descripción"
          ref={register}
          id="form-input"
        />
        <input
          type="text"
          placeholder="Cómo aplicar:"
          name="Cómo aplicar"
          ref={register}
          id="form-input"
        />
        <input
          type="text"
          placeholder=" Email (Compañía):"
          name=" Email"
          ref={register}
          id="form-input"
        />
        <div id="message">
          <textarea
            placeholder="Escribe una descripcion para el puesto de trabajo"
            id="form-input"
          ></textarea>
        </div>
        <input type="submit" value="Enviar" id="button" />
      </form>
    </div>
  );
}
