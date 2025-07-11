import { useEffect, useState } from "react";
import {jwtDecode} from "jwt-decode";
import { toast } from "react-toastify";

function Dashboard() {
  const [user, setUser] = useState({ name: "", email: "" });
  const [message, setMessage] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      toast.error("No token found. Please login.");
      window.location.href = "/";
      return;
    }

    try {
      // ✅ Decode user info from token
      const decoded = jwtDecode(token);
      setUser({ name: decoded.name, email: decoded.email });

      // ✅ Verify token with backend
      fetch("http://localhost:5000/dashboard", {
        headers: {
          Authorization: token,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.message === "Welcome to your dashboard!") {
            setMessage(data.message);
          } else {
            toast.error("Session expired. Please login again.");
            localStorage.removeItem("token");
            setTimeout(() => {
              window.location.href = "/";
            }, 1500);
          }
        })
        .catch((err) => {
          console.error("Fetch error:", err);
          toast.error("Something went wrong");
          localStorage.removeItem("token");
          window.location.href = "/";
        });
    } catch (err) {
      toast.error("Invalid token. Please login again.");
      localStorage.removeItem("token");
      window.location.href = "/";
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    toast.success("Logged out");
    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-100 p-4">
      <h2 className="text-3xl font-bold text-green-700 mb-2">
        Welcome, {user.name}
      </h2>
      <p className="text-md text-gray-700 mb-6">Email: {user.email}</p>
      <p className="text-lg text-green-600 mb-8">{message}</p>

      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
