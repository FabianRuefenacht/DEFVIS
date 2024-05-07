"use client";
import React from "react";
import Link from "next/link";
import createCookie from "../components/cookies/cookiecreator";

const Logout = () => {
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const expiringIn = 0; // Cookie expiring now
    createCookie("authorisation", "true", expiringIn);
    createCookie("user", "email", expiringIn);
    setTimeout(() => {
      window.location.replace("/");
    }, 100);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="bg-neutral-400 text-white p-8 rounded shadow-md w-96">
        <h1 className="text-4xl text-center font-semibold mb-8 text-white">
          Abmelden
        </h1>
        <form onSubmit={handleSubmit}>
          <button
            type="submit"
            className="w-full bg-blue-500 my-2 text-white py-2 rounded hover:bg-blue-600"
          >
            Abmelden
          </button>
        </form>
        
        <div className="text-center text-white mt-4">- ODER -</div>
        <Link
          className="block text-center text-blue-500 hover:underline mt-2"
          href="/"
        >
          Zurück zur App
        </Link>
      </div>
    </main>
  );
};

export default Logout;
