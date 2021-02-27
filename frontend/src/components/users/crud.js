import axios from "axios";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import "./users.css";
import UserTable from "./userTable";
import { v4 as uuidv4 } from "uuid";

export default function Crud() {
  const usersData = [];
  const [users, setUsers] = useState(usersData);

  const { register, handleSubmit, errors } = useForm();

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const onSubmit = (data) => {
    var dataInfo = {
      id: uuidv4(),
      usuario: data.usuario,
      password: data.password,
    };
    users.push(dataInfo);
    console.log(users);
  };
  return (
    <div className="container">
      <UserTable users={users} />

      <form
        class="login-box"
        onSubmit={handleSubmit(onSubmit)}
        deleteUser={deleteUser}
      >
        <h1 id="c-tag">CRUD para usuarios</h1>
        <input
          type=""
          placeholder="Usuario:"
          name="usuario"
          ref={register({ required: true })}
        />
        {errors.usuario &&
          errors.usuario.type === "required" &&
          "Usuario requerido"}
        <input
          type="password"
          placeholder="password:"
          name="password"
          ref={register({ required: true })}
        />
        {errors.email && errors.email.type === "required" && "Email requerido"}
        <input type="submit" value="Enviar" className="button" />
      </form>
    </div>
  );
}
