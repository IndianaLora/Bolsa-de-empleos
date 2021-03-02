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
      <section id="bordercolor">
        <br></br>
        <h1 className="h1">¿Buscas empleo?</h1>
        <br></br>
        <p id="pa">
          Selecciona el area de trabajo que quieres buscar y la ciudad.
        </p>

<<<<<<< HEAD
        {
          <div>
            <select className="more-jobs">
=======
          
          <div id="contenedor">
            <select className="key-search2">
>>>>>>> d2003939bd4ed596bc39ae7200d5aa973966bf61
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
<<<<<<< HEAD
        }
        {/* <button
=======
        <button
>>>>>>> d2003939bd4ed596bc39ae7200d5aa973966bf61
          className="btn btn-danger  more-jobs"
          type="submit"
          onClick={() => {
            history.push("/moreJobs");
          }}
        >
          Mas trabajos
        </button> */}
        <input
          className="key-search1"
          type="search"
          placeholder="Buscar Empleos"
        />
        <button className="btn btn-primary search-jobs" type="submit">
          Buscar
        </button>
        </section>

        <div className="contendorTable">
        <table className="table table-dark table-sm">
        <thead>
                <tr>
                  <th scope="col">Categoria</th>
                  <th scope="col">Compañia</th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Posicion</th>
                </tr>
              </thead>
          {jobs.map((job) => {
            return (
<<<<<<< HEAD
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
=======
              <tbody>
                <tr className="tr2">
                  <td className="job">{job.categoryId}</td> 
                  <td className="job">{job.companyLocation}</td>
                  <td className="job">{job.companyName}</td>
                  <td className="job">{job.position}</td>
                </tr>
              </tbody>
>>>>>>> d2003939bd4ed596bc39ae7200d5aa973966bf61
            );
          })}
        </table>
        </div>
      </div>
    </div>
  );
}
