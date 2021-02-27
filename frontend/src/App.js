import Busqueda from "./components/busqueda/Busqueda";
import Container from "./container";
import Navbar from "./components/navbar/navbar";
import Login from "./components/users/login";
import Registro from "./components/users/registro";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
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
      </Switch>
    </Router>
  );
}
