import "./Form.css";
import React, { useState } from "react";
import ReactDom from "react-dom";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

export default function Container() {
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();
  const home = () => {
    history.push("/busqueda");
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
          <button className="editar">Editar</button>
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

  return (
    <div id="container" className="container">
      <div className="popUp" id="popUp">
        {" "}
      </div>
      <form id="form" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Nombre de la empresa:"
          name="empresa"
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
        <div>
          <label for="tipo">Tiempo completo</label>
          <input type="radio" name="tipo" value="Tiempo completo" />
          <label for="tipo">Medio Tiempo</label>
          <input type="radio" name="tipo" value="Tiempo completo" />
          <label for="tipo">Free-lancer</label>
          <input type="radio" name="tipo" value="Tiempo completo" />
        </div>

        {errors.Tipo && <p>Debe llenar este campo</p>}
        <input
          type="image"
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
        <select name="aplicar" ref={register} id="form-input">
          <option value="">Como aplicar :</option>
          <option value="">Correo electronico</option>
          <option value="">Numero telefonico</option>
        </select>
        <input
          type="text"
          placeholder=" Email (Compañía):"
          name="email"
          ref={register}
          id="form-input"
        />
        <div id="descripcion">
          <textarea
            placeholder="Escribe una descripcion para el puesto de trabajo"
            id="form-input"
            name="descripcion"
          >
            {" "}
          </textarea>
        </div>
        <input type="submit" value="Enviar" className="button" />
      </form>
    </div>
  );
}
