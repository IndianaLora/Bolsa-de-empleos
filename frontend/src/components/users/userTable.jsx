import axios from "axios";
import React, { useState } from "react";
import "./users.css";

export default function UserTable(props) {
    
    return(
    <div class="box">
          <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Username</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map((user) => (
          <tr key={user.id}>
            <td>{user.usuario}</td>
            <td>{user.email}</td>
            <td>
              <button className="button">Edit</button>
              <button className="button "  onClick={() => props.deleteUser(user.id)}>Delete</button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No users</td>
        </tr>
      )}
    </tbody>
  </table>
      </div>

)

}
