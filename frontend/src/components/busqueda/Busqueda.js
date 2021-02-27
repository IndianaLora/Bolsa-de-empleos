import axios from "axios"; //Funciona 'fetch' permite conectarte la API
import React, { useState, useEffect } from "react";

import "./busqueda.css";

//api/job-categories
//api/jobs

export default function Busqueda() {
  const [jobs, setJobs] = useState();

  const Call =() => {
    return useEffect(() => {
      let jobsUrl = "http://localhost:3001/api/jobs";
      axios
        .get(jobsUrl)
        .then(function (response) {
          // handle success
          console.log(response);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    });
  };

  return (
    <div>
      <div>
        <h1 className="h1">¿Buscas empleo?</h1>
        <br></br>
        <p className="pa">
          Selecciona el area de trabajo que quieres buscar y la ciudad
        </p>

        <input
          className="form-select"
          type="search"
          placeholder="Buscar Empleos"
        />

        {/* 
        <select className="select1">
          <option selected>Seleccione categoria</option>
        </select> */}
        <h1 className="text-center">Programacion</h1>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick exmple text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary btn-group-sm">
            Go somewhere
          </a>
        </div>
        <h1 className="text-center">Mecatronica</h1>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick exmple text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary btn-group-sm">
            Go somewhere
          </a>
        </div>
      </div>
      <button className="btn btn-primary" type="submit">
        Buscar
      </button>
    </div>
  );
}
