import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiUrl =process.env.REACT_APP_API_URL || "/api";  // Directly use the correct API URL

    console.log("Fetching from:", apiUrl);  // Debugging: Check the API URL
    
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to fetch. Status code: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Data received:", data);  // Debugging: Check data
        setUsers(data.users);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading users...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="app">
      <h1>User List</h1>
      {users.length > 0 ? (
        <ul>
          {users.map((user, index) => (
            <li key={index}>{user}</li>
          ))}
        </ul>
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
}

export default App;
