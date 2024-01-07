import React from "react";

export default function Login() {
  return (
    <div>
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Log In</h1>
            <input
              type="email"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
            />
            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
            />
            <button
              type="submit"
              className="w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
              style={{ backgroundColor: "rgb(251, 146, 60)" }}
            >
              Log In
            </button>
          </div>
          <div className="text-grey-dark mt-6">
            Want to create a new account ?
            <a
              className="ml-2 text-orange-400 no-underline border-b border-blue text-blue"
              href="/signup"
            >
              Sign up
            </a>
            .
          </div>
        </div>
      </div>
    </div>
  );
}
