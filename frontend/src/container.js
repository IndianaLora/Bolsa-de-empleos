import React, { useState } from "react";
import "./App.css";
import ReactDOM from "react-dom";

function Container() {
  return (
    <form id="form">
      <label>
        Compañía:
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Submit" />
      <br></br>
      <label>
        Tipo :
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Submit" />
      <br></br>
      <label>
        Logo (opcional):
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Submit" />
      <br></br>
      <label>
        URL (opcional):
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Submit" />
      <br></br>
      <label>
        Posición:
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Submit" />
      <br></br>
      <label>
        Ubicación:
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Submit" />
      <br></br>
      <label>
        Ubicación:
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Submit" />
      <br></br>
      <label>
        Categoría :
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Submit" />
      <br></br>
      <label>
        Descripción :
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Submit" />
      <br></br>
      <label>
        Cómo aplicar:
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Submit" />
      <br></br>
      <label>
        Email :
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Submit" />
      <br></br>
    </form>
  );
}

export default Container;
