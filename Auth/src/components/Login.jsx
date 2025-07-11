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
    <div class="h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} class="border-4 border-blue-500  w-5px h-5px " >
        <h2>Login Page</h2>
        <div>
          <label htmlFor="">Email: </label>
          <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        </div>
        <div>
          <label htmlFor="">Password: </label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
          <button type="button" class="bg-red-200">Login</button>
        </div>
      </form>
    </div>
  )
}

export default Login