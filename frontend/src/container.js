import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "./App"; //named export
import { useForm } from "react-hook-form";

import axios from "axios";
import "./Form.css";

export default function Container() {
  const { register, handleSubmit, errors } = useForm();
  const [jobType, setJobtype] = useState();
  const [jobs, setJobs] = useState();
  const [jobCategories, setJobCategories] = useState();

  const user = useContext(UserContext);
  console.log(user);

  useEffect(() => {
    axios.get("http://localhost:3001/api/job-categories").then((response) => {
      setJobCategories(response.data);
    });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:3001/api/job-types").then((response) => {
      setJobtype(response.data);
    });
  }, []);

  const onSubmit = (data) => {
    console.log(data);
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
        console.log(setJobs(response.data));
        alert("Gracias por postear su trabajo");
      })
      .catch(function (error) {
        console.log(error);
      });
    console.log(data);
  };

  if (jobType === undefined || jobCategories === undefined) {
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
          ref={register}
          id="form-input"
        />
        <div>
          {jobType.map((jobTypex) => {
            return (
              <>
                <label>{jobTypex.name}</label>
                <input type="radio" name={jobTypex.id} ref={register} />
                <br />
              </>
            );
          })}
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
          name="position"
          ref={register}
          id="form-input"
        />
        <div>
          <select className="search">
            <option className="card-text">Busca por categoria</option>
            {jobCategories.map((jobCategory) => {
              return (
                <option value={jobCategory.id} ref={register}>
                  {jobCategory.name}
                </option>
              );
            })}
          </select>
        </div>
        <input
          type="text"
          name="companyLocation"
          ref={register}
          placeholder="Ubicacion de la Compañía"
          id="form-input"
        />
        <input
          type="text"
          placeholder="Url (Compañía):"
          name="url"
          ref={register}
          id="form-input"
        />
        <div id="message">
          <input
            placeholder="Escribe una descripcion para el puesto de trabajo"
            id="form-input"
            name="title"
            ref={register}
            className="text-white"
          />
        </div>
        <input type="submit" className="btn btn-block btn-info button" />
      </form>
    </div>
  );
}
