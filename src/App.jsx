import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);

 useEffect(() => {
  fetch('http://localhost:5000/users')
  .then(res => res.json())
  .then(data => setUsers(data))
 } ,[])

  return (
    <>
      <h1>Users Management System</h1>
      <h3>Number of Users: {users.length}</h3>
      <div>
        {
          users.map(user => <p key={user.id}>{user.id} : {user.name} : {user.email}</p>)
        }
      </div>
    </>
  );
}

export default App;