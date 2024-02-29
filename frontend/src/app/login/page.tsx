"use client";
import React from 'react'
import Link from 'next/link'

const Login = () => {

  const handleSubmit = async (e: any) => {
      e.preventDefault();
      const email = e.target[0].value;
      const password = e.target[1].value;

      console.log(email, password)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="bg-zinc-700 text-zinc-200 p-8 rounded shadow-md w-96">
        <h1 className="text-4xl text-center font-semibold mb-8">Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            className="w-full border border-gray-300 my-2 text-black rounded px-3 py-2 focus:outline-none focus:border-blue-400 focus:text-black"
            placeholder="E-Mail"
            required
          />
          <input
            type="password"
            className="w-full border border-gray-300 my-2 text-black rounded px-3 py-2 focus:outline-none focus:border-blue-400 focus:text-black"
            placeholder="Passwort"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 my-2 text-white py-2 rounded hover:bg-blue-600"
          >
            Login
          </button>
        </form>
        <div className="text-center text-gray-500 mt-4">- ODER -</div>
        <Link className="block text-center text-blue-500 hover:underline mt-2" href="/register">Neu registrieren</Link>
      </div>
    </main>
  )
}

export default Login