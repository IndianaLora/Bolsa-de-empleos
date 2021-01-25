import "./App.css";
import ReactDOM from "react-dom";
function Header(props) {
  return (
    <div className="Header">
      <header className="App-header">
        {/* <h3>Clock {props.date.toLocaleTimeString()}</h3> */}
        <h1>Empleos RD</h1>
      </header>
    </div>
  );
}
// function createClock(props) {
//   ReactDOM.render(<Header date={new Date()} />);
// }

export default Header;
