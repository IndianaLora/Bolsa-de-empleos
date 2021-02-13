import "./Form.css";
<<<<<<< HEAD
import React from "react";
import ReactDom from "react-dom";
=======
>>>>>>> e4bc77815c51aeeaa6132aed92cd8b7d343e58ce
import { useForm } from "react-hook-form";

export default function Container() {
  const { register, handleSubmit, errors } = useForm();
<<<<<<< HEAD
  const history = useHistory();
  const home = () => {
    history.push("/busqueda");
  };
  const editar = () => {
    var popUp = document.getElementById("popUp");
    popUp.style = "visibility: hidden";
  };
  const onSubmit = (data) => {
    const pop = (
      <div>
        <img src={data.logo} />
        <h5>Empresa: {data.empresa}</h5>
        <h5>Tipo: {data.tipo}</h5>
        <h5>Logo: {data.logo}</h5>
        <h5>posicion: {data.posicion}</h5>
        <h5>Ubicacion: {data.ubicacion}</h5>
        <h5>categoria: {data.categoria}</h5>
        <h5>Como aplicar: {data.posicion}</h5>
        <h5>Email: {data.email}</h5>
        <h5>descripcion: {data.descripcion}</h5>
        <div>
          <button className="editar" onClick={editar}>
            Editar
          </button>
          <button className="finalizar" onClick={home}>
            Finalizar
          </button>
        </div>
      </div>
    );
    var popUp = document.getElementById("popUp");
    ReactDom.render(pop, popUp);
    popUp.style = "visibility: visible";

  
  };
=======
  const onSubmit = (data) => console.log(data);
>>>>>>> e4bc77815c51aeeaa6132aed92cd8b7d343e58ce

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
