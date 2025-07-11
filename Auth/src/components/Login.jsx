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
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-md " >
        <h2 className="mb-4 text-2xl flex items-center justify-center">Login Page</h2>
        <div className="mb-4">
          <label className="block mb-1">Email: </label>
          <input type="email" className="w-full border border-gray-300 px-3 py-2 rounded" value={email} onChange={(e)=>setEmail(e.target.value)} />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Password: </label>
          <input type="password" className="w-full border border-gray-300 px-3 py-2 rounded" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="mb-4">
          <button type="button"  className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Login</button>
        </div>
      </form>
    </div>
  )
}

export default Login;