// SignupModal.jsx
import { useState, useEffect } from "react";

export default function SignupModal({ onClose }) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Prevent background scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);

  // call the post /signup api and save the user imformation in db
  async function handleSubmit(e) {
    
    e.preventDefault();

    const userData = { name, address, email, password };

    try {
      const response = await fetch("http://localhost:8080/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Failed to register");
        return;
      }

      alert("User registered successfully!");
      console.log("Response:", data);

      // Close modal after success, after 3sec
      setTimeout(() => {
        onClose()
      }, 3000);
      
    } catch (error) {
      console.error("Signup Error:", error);
      alert("Something went wrong, Try again.");
    }
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
      <div className="bg-white w-full max-w-md rounded-xl shadow-xl p-5">

        <h2 className="text-lg font-bold mb-4 text-center bg-orange-400 text-white p-2 rounded-md">
          Sign Up
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">

          <input
            type="text"
            placeholder="Full Name"
            className="border p-2 rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoFocus
          />

          <textarea
            placeholder="Address (optional)"
            className="border p-2 rounded"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            rows={2}
          />

          <input
            type="email"
            placeholder="Email"
            className="border p-2 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="border p-2 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="flex justify-end gap-2 mt-3">
            <button
              type="button"
              className="px-4 py-2 bg-gray-300 rounded"
              onClick={onClose}
            >
              Cancel
            </button>

            <button type="submit" className="px-4 py-2 hover:scale-95 hover:bg-green-800 bg-green-600 text-white rounded">
              Sign Up
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
