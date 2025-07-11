import { useState } from "react";
function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        alert(data.message);
        window.location.href = "/"; // success
      } else {
        alert(data.message);
        window.location.href = "/"; // error like "User already exists"
      }
    } catch (err) {
      alert("Something went wrong");
      console.error("Error:", err);
    }
};

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
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
          <button type="submit"  className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Register</button>
        </div>
      </form>
      <p className="mt-4 text-sm text-center">
        Already registered?{" "}
        <a href="/" className="text-blue-600 hover:underline">
          Login
        </a>
      </p>
    </div>
  );
}

export default Register;