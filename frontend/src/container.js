import "./App.css";
import { useForm } from "react-hook-form";

export default function Container() {
  const { register, handleSubmit, errors } = useForm();
  // var posicion = {};
  const onSubmit = (data) => console.log(data);

  return (
    <div id="container">
      <form id="form" onSubmit={handleSubmit(onSubmit)}>
        <label>
          Compañía:
          <input
            type="text"
            name="Compañía"
            ref={register({ required: true, minLength: 2 })}
          />
        </label>

        <br></br>
        <label>
          Tipo :
          <select name="Tipo" ref={register}>
            <option value="">Agente</option>
            <option value="">Supervisor</option>
            <option value=""> Gerente</option>
          </select>
          {errors.Tipo && <p>Debe llenar este campo</p>}
        </label>

        <br></br>
        <label>
          Logo (opcional):
          <input type="text" name=" Logo" ref={register} />
        </label>

        <br></br>
        <label>
          URL (opcional):
          <input type="text" name="URL " ref={register} />
        </label>

        <br></br>
        <label>
          Posición (puesto):
          <input type="text" name="Posición" ref={register} />
        </label>

        <br></br>
        <label>
          Ubicación:
          <select name="ubicacion" ref={register}>
            <option value=""> Santo Domingo</option>
            <option value=""> Zona oriental</option>
          </select>
        </label>
        <br></br>
        <label>
          Categoría :
          <input type="text" name="Categoría" ref={register} />
        </label>
        <br></br>
        <label>
          Descripción :
          <input type="text" name=" Descripción" ref={register} />
        </label>
        <br></br>
        <label>
          Cómo aplicar:
          <input type="text" name="Cómo aplicar" ref={register} />
        </label>
        <br></br>
        <label>
          Email (Compañía):
          <input type="text" name=" Email" ref={register} />
        </label>
        <br></br>
        <input type="submit" value="Enviar" id="button" />
      </form>
    </div>
  );
}
