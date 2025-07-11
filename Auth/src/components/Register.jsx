import { useState } from "react";
function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Password:", password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-md " >
        <h2 className="mb-4 text-2xl flex items-center justify-center">Register</h2>
        <div className="mb-4">
          <label className="block mb-1">Name: </label>
          <input type="text" className="w-full border border-gray-300 px-3 py-2 rounded" value={name} onChange={(e)=>setName(e.target.value)}/>
        </div>
        <div className="mb-4">
          <label className="block mb-1">Email: </label>
          <input type="email" className="w-full border border-gray-300 px-3 py-2 rounded" value={email} onChange={(e)=>setEmail(e.target.value)} />
        </div>
        <div className="mb-4">
          <label className="block mb-1">Password: </label>
          <input type="password" className="w-full border border-gray-300 px-3 py-2 rounded" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="mb-4">
          <button type="button"  className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Register</button>
        </div>
      </form>
    </div>
  );
}

export default Register;