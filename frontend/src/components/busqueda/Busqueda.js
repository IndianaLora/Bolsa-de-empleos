import axios from "axios"; //Funciona 'fetch' permite conectarte la API
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./busqueda.css";

//api/job-categories
//api/jobs

export default function Busqueda() {
  const [jobCategories, setJobCategories] = useState();
  const [jobs, setJobs] = useState();
  const history = useHistory();

  useEffect(() => {
    axios.get("http://localhost:3001/api/job-categories").then((response) => {
      setJobCategories(response.data);
    });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:3001/api/jobs").then((response) => {
      setJobs(response.data);
    });
  }, []);

  if (jobCategories === undefined || jobs === undefined) {
    return "La pagina esta cargando";
  }

  return (
    <div>
      <div>
        <h1 className="h1">¿Buscas empleo?</h1>
        <br></br>
        <p className="pa">
          Selecciona el area de trabajo que quieres buscar y la ciudad
        </p>

        {
          <div>
            <select className="more-jobs">
              <option className="text-dark">Busca por categoria</option>
              {jobCategories.map((jobCategory) => {
                return (
                  <option value={jobCategory.id} className="text-dark">
                    {jobCategory.name}
                  </option>
                );
              })}
            </select>
          </div>
        }
        {/* <button
          className="btn btn-danger  more-jobs"
          type="submit"
          onClick={() => {
            history.push("/moreJobs");
          }}
        >
          Mas trabajos
        </button> */}
        <input
          className="key-search"
          type="search"
          placeholder="Buscar Empleos"
        />
        <button className="btn btn-primary search-jobs" type="submit">
          Buscar
        </button>

        <div>
          {jobs.map((job) => {
            return (
              <div className="card-">
                <label>{job.categoryId}</label>
                <div className="card-body">
                  <h4 className="card-tittle">
                    Ubicacion:{job.companyLocation}
                  </h4>
                  <h4 className="card-tittle">
                    Empresa:{"  "}
                    {job.companyName}
                  </h4>
                  <h5 className="card-tittle">
                    Posicion: {"  "}
                    {job.position}
                  </h5>
                </div>
                <br />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
