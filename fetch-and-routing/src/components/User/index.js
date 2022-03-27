import { useState, useEffect } from "react";
import axios from "axios";

function User() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((data) => setUsers(data.data))
      .finally(() => setIsLoading(false));
  }, []);
  return (
    <div>
      <h3>User</h3>
      <ul>
        {isLoading ? (
          <div>Loading ...</div>
        ) : (
          users.map((item) => <li key={item.id}>{item.name}</li>)
        )}
      </ul>
    </div>
  );
}

export default User;
