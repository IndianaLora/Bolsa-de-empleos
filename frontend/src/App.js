import axios from "axios";
import React, { useState, useEffect } from "react";
import Busqueda from "./components/busqueda/Busqueda";
import Container from "./container";
import Navbar from "./components/navbar/navbar";
import Login from "./components/users/login";
import MoreJobs from "./components/morejobs/moreJobs";
import Registro from "./components/users/registro";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export const UserContext = React.createContext(null);

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    var token = localStorage.getItem("token");
    if (token) {
      axios
        .post("http://localhost:3001/api/auth/check", {
          params: {
            token: token,
          },
        })
        .then(function (res) {
          setUser(res.data);
        })
        .catch(function (err) {
          console.error(err, "hellooooooooooooo");
        });
    }
  }, []);

  return (
    <UserContext.Provider value={user}>
      <Router>
        <div>
          <Navbar />
        </div>
        <Route path="/" exact component={Busqueda} />
        <Switch>
          <Route path="/container">
            <Container />
          </Route>
          <Route path="/busqueda">
            <Busqueda />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/registro">
            <Registro />
          </Route>
          <Route path="/moreJobs">
            <MoreJobs />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}
