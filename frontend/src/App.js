import Busqueda from "./components/busqueda/Busqueda";
import Container from "./container";
import Navbar from "./components/navbar/navbar";
import Cards from "./components/cards/cards";
import Login from "./components/Form/login";
import Registro from "./components/Form/registro";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
      </div>
      <Switch>
        <Route path="/container">
          <Container />
        </Route>
        <Route path="/busqueda">
          <Busqueda />
          <div>
            <Cards />
          </div>
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/registro">
          <Registro />
        </Route>
      </Switch>
    </Router>
  );
}
