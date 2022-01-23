import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { SyncOutlined } from '@ant-design/icons';

const Register = () => {
  const [name, setName] = useState('Renan');
  const [email, setEmail] = useState('renan1@test.com');
  const [password, setPassword] = useState('123456');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.table({name, email, password})
    try {
      setLoading(true);
      const {data} = await axios.post(`http://localhost:8000/api/register`, {
        name,
        email,
        password,
      });
      // console.log('REGISTER RESPONSE', data)
      toast.success('Registration successful. Please log in.')
      setLoading(false);
    } catch (err) {
      toast.error(err.response.data);
      setLoading(false);
    }
  }
  return (
    <>
      <h1 className="jumbotron">Register</h1>
      
      <div className="d-grid gap-2 col-4 mx-auto">
        <form className="d-grid gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control p-3"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Enter name"
            required
          />

          <input
            type="email"
            className="form-control p-3"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Enter email"
            required
          />

          <input
            type="password"
            className="form-control p-3"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Enter password"
            required
          />

          <button
            type="submit"
            className="btn btn-primary btn-lg"
            disabled={!name || !email || !password || loading}
          >
            {loading ? <SyncOutlined spin /> : "Submit"}
          </button>
        </form>
      </div>
    </>
  )
}

export default Register;