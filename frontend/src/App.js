import "./App.css";
import ReactDOM from "react-dom";
function Header(props) {
  return (
    <div className="Header">
      <header className="App-header">
        {/* <h3>Clock {props.date.toLocaleTimeString()}</h3> */}
        <h1>
          Empleos
          <span id="r"> R</span>
          <span id="d">D</span>
        </h1>
      </header>
      {function Forms() {
        return (
          <form>
            <label>
              Name:
              <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
          </form>
        );
      }}
    </div>
  );
}

export default Header;
