import { useState, useEffect } from 'react';
import axios from 'axios';

function AxiosData() {
  const [users, setUsers] = useState([]);        // Liste des utilisateurs
  const [loading, setLoading] = useState(true);  // État de chargement
  const [error, setError] = useState(null);      // État d'erreur éventuelle

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => setUsers(response.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Chargement en cours...</p>;
  if (error) return <p>Erreur : {error}</p>;

  return (
    <div>
      <h2>Utilisateurs chargés avec axios</h2>
      <p>Nombre d'utilisateurs chargés : {users.length}</p>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} – {user.email}– {user.address.city}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AxiosData;