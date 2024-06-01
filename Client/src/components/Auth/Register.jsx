import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const title = 'Authentication | Register';

function AuthRegister() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    document.title = title
  }, []);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://localhost:3001/register', { username, password });
        document.getElementById('message').innerHTML = response.data.message;
    } catch (error) {
        alert('Failed to register');
        console.error(error);
    }
  };

  return (
      <form onSubmit={handleRegister}>
          <h2>Register</h2>
          <div>
              <label>Username</label>
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
          </div>
          <div>
              <label>Password</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <div id='message'></div>
          <button type="submit">Register</button>
      </form>
  );
}

export default AuthRegister;