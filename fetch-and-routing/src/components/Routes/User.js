import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    Axios("https://jsonplaceholder.typicode.com/users").then((res) =>
      setUsers(res.data)
    );
  }, []);

  return (
    <div>
      <h1>Users</h1>

      <ul>
        {users.map((item) => {
          return <Link to={`/profile/${item.id}`}><li key={item.id}>{item.name}</li></Link>
        })}
      </ul>
    </div>
  );
}

export default Users;
