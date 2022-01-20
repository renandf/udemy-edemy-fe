import { useState } from 'react';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.table({name, email, password})
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

          <button type="submit" className="btn btn-primary btn-lg">
            Submit
          </button>
        </form>
      </div>
    </>
  )
}

export default Register;