import "./styles.css";
import { useState } from "react";

export default function App() {
  const [users, setUsers] = useState(null);

  const fetchUserData = async () => {
    const response = await fetch("https://randomuser.me/api/?results=10");
    const data = await response.json();
    setUsers(data.results);
  };

  const handleClick = () => {
    fetchUserData();
  };

  return (
    <div className="App">
      <h1>Find users list</h1>
      <button onClick={() => handleClick()}>Get details</button>
      <br /> <br />
      {users && (
        <table>
          <thead>
            <tr>
              <td>
                <b>First name</b>
              </td>
              <td>
                <b>Last name</b>
              </td>
              <td>
                <b>Email</b>
              </td>
              <td>
                <b>Contact Number</b>
              </td>
            </tr>
          </thead>
          <tbody>
            {users?.map((user, index) => (
              <tr key={index}>
                <td>{user?.name?.first}</td>
                <td>{user?.name?.last}</td>
                <td>{user?.email}</td>
                <td>{user?.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
