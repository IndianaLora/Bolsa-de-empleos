import axios from "axios"; //Funciona 'fetch' permite conectarte la API
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Pagination } from "antd";
import "./busqueda.css";

//api/job-categories
//api/jobs

export default function Busqueda() {
  const [jobCategories, setJobCategories] = useState();
  const [jobs, setJobs] = useState();
  const [jobsFilter, setJobsFilter] = useState();

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
  useEffect(() => {
    axios
      .post("http://localhost:3001/api/jobs/filter", {
        data: {
          //el valor del option
        },
      })
      .then(function (response) {
        console.log(response);
        alert("Gracias por postear tu trabajo"); //quitar esto luego
      })
      .catch(function (error) {
        console.log(error + "no funciona");
        alert("no busca");
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

          {
            <div>
              <select className="more-jobs">
                <option className="text-dark">Busca por categoria</option>
                {jobCategories.map((jobCategory) => {
                  return (
                    <option
                      value={jobCategory.id}
                      className="text-dark"
                      onSelect={() => {
                        console.log("mnm");
                        //how to acces the value of a option
                      }}
                    >
                      {jobCategory.name}
                    </option>
                  );
                })}
              </select>
            </div>
          }

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
                <div className="card-">
                  {/* {Mostrar categoria en ves de id} */}
                  <label>{job.id /*categorias*/}</label>
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
          </table>
        </div>
        <div>
          <div className="contendorTable">
            <table className="table table-danger table-sm">
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
                  <div>
                    <label>{job.id /*categorias*/}</label>
                    <div>BUSQUEDA</div>
                    <br />
                  </div>
                );
              })}
            </table>
            <div className="pagination">
              <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-center">
                  <li class="page-item disabled">
                    <a class="page-link" href="#" tabindex="-1">
                      Previous
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li class="page-item">
                    <a class="page-link" href="#">
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>

        <div />
      </div>
    </div>
  );
}
