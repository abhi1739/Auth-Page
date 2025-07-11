import { useState } from "react";

function Login() {
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Login Page</h2>
        <div>
          <label htmlFor="">Email: </label>
          <input type="email" value={email} onchange={(e)=>setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor="">Password: </label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
          <button type="button">Login</button>
        </div>
      </form>
    </div>
  )
}

export default Login