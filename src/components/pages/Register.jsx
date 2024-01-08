import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const user = {
    username,
    email,
    phone,
    password,
  };

  const handleRegister = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        alert("Your account has been created successfully.");
        navigate("/login");
      }
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div>
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Register</h1>
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="Username"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="email"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="number"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="phone"
              placeholder="Phone Number"
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              onClick={handleRegister}
              className="w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
              style={{ backgroundColor: "rgb(251, 146, 60)" }}
            >
              SignUp
            </button>
          </div>
          <div className="text-grey-dark mt-6">
            Want to create a new account ?
            <a
              className="ml-2 text-orange-400 no-underline border-b border-blue text-blue"
              href="/signup"
            >
              Login
            </a>
            .
          </div>
        </div>
      </div>
    </div>
  );
}
