import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { FaFileImport } from "react-icons/fa";
import axios from "axios";
import "./Form.css";
//letras blancas

export default function Container() {
  const { register, handleSubmit, errors } = useForm();
  const [jobType, setJobtype] = useState();

  const onSubmit = (data) => {
    //popUp
    const jobsUrl = "http://localhost:3001/api/jobs";
    axios
      .post(jobsUrl, {
        data: {
          title: data.title,
          position: data.position,
          companyName: data.companyName,
          companyLogo: data.companyLogo,
          companyLocation: data.companyLocation,
          url: data.url,
          categoryId: 36,
          typeId: 2,
        },
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log(data);
  };
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/job-types")
      .then(function (response) {
        // handle success

        setJobtype(response);

        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  if (jobType === undefined) {
    return "Jobtype esta undefined";
  }
  return (
    <div id="container" className="container">
      <form id="form" onSubmit={handleSubmit(onSubmit)}>
        <h2 className="text-black">Postea tu trabajo</h2>
        <input
          type="text"
          placeholder="Compañía:"
          name="companyName"
          ref={register({ required: true })}
          id="form-input"
        />
        <div>
          {/* {jobType.map((jobTypes) => {
            return (
              <>
                <label>{jobTypes.name}</label>
                <input type="radio" name="tipo" ref={register} />
              </>
            );
          })} */}
        </div>

        {/* {errors.Tipo && <p>Debe llenar este campo</p>} */}
        <label>lOGO</label>
        <input
          type="file"
          placeholder=" Logo (opcional):"
          name="companyLogo"
          ref={register}
          id="form-input"
        />
        <input
          type="text"
          placeholder="Puesto de trabajo"
          name="posicion"
          ref={register}
          id="form-input"
        />
        <select
          name="categoria"
          placeholder="Categoria:"
          ref={register}
          id="form-input"
        >
          <option value="">Elija la Categoria</option>
          <option value=""> Zona oriental</option>
        </select>
        <input
          type="text"
          name="companyLocation"
          ref={register}
          placeholder="Ubicacion de la Compañía"
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
            name="title"
            className="text-white
"
          >
            Escribe una descripcion para el puesto de trabajo
          </textarea>
        </div>
        <input
          type="submit"
          value="Enviar"
          className="btn btn-block btn-info button"
        />
      </form>
    </div>
  );
}
