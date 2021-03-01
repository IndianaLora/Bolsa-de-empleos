import axios from "axios"; //Funciona 'fetch' permite conectarte la API
import React, { useState, useEffect } from "react";
import "./moreJobs.css";

//api/job-categories
//api/jobs

export default function MoreJobs() {
  const [jobCategories, setJobCategories] = useState();
  const [jobs, setJobs] = useState();
  

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
        {
          <div>
            <select className="key-search">
              <option className="text-dark">Busca por categoria</option>
              {jobCategories.map((jobCategory) => {
                return (
                  <option value={jobCategory.id} className="text-dark">{jobCategory.name}</option>
                );
              })}
            </select>
          </div>
        }

        <div>
          {jobs.map((job) => {
            return (
              <div className="card-">
                <label>{job.categoryId}</label>
                <div className="card-body">
                  <h4 className="card-tittle">{job.companyLocation}</h4>
                  <h4 className="card-tittle">{job.companyName}</h4>
                  <h5 className="card-tittle">{job.position}</h5>
                  <p className="card-text">
                    Some quick exmple text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
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
