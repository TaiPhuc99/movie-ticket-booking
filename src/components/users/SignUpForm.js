import React from "react";
import { Link } from "react-router-dom";

export default function SignUpForm() {
  return (
    <form className="w-full flex flex-col py-4">
      <input
        className="p-3 my-2 bg-gray-700 rouded"
        type="email"
        placeholder="Email"
        autoComplete="email"
      />
      <input
        className="p-3 my-2 bg-gray-700 rouded"
        type="password"
        placeholder="Password"
        autoComplete="current-password"
      />
      <button className="bg-red-600 py-3 my-6 rounded font-bold">
        Sign Up
      </button>
      <div className="flex justify-between items-center text-sm text-gray-600">
        <p>
          <input className="mr-2" type="checkbox" />
          Remember me
        </p>
        <p>Need Help?</p>
      </div>
      <p className="py-8">
        <span className="text-gray-600">Already subscribed to Netflix?</span>{" "}
        <Link to="/sign-in">Sign In</Link>
      </p>
    </form>
  );
}
