"use client";
import React from "react";
import Link from "next/link";
import createCookie from "../components/cookies/cookiecreator";
import axios from "axios";
import { useState } from "react";
import bcrypt from "bcryptjs";

const Login = () => {
  const [errorMessage, setErrorMessage] = useState(""); // Error-Message in Login-Form

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    const hashedPassword = await bcrypt.hash(password, 10);

    try {
      const response = await axios.post("http://localhost:8000/login/", {
        // send API-request
        email,
        password: hashedPassword,
      });

      if (response.data.email == "noUserFound@notfound.ch") {
        // If user was not found
        setErrorMessage("UserNotFound");
      } else {
        setErrorMessage("");

        bcrypt.compare(
          password,
          response.data.password,
          function (err: any, res: any) {
            if (err) {
              // if an error occurs
              console.log(err);
            }
            if (res) {
              // if passwords do match
              const expiringIn = 24 * 60 * 60 * 1000; // Cookie expiring in one day
              createCookie("authorisation", "true", expiringIn);
              createCookie("user", email, expiringIn);

              setTimeout(() => {
                window.location.replace("/");
              }, 100);
            } else {
              setErrorMessage("WrongPW"); // If password do not match
            }
          }
        );

        console.log("Success");
        console.log(response.data);
      }
    } catch (error) {
      console.error("Fehler", error);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="bg-zinc-700 text-zinc-200 p-8 rounded shadow-md w-96">
        <h1 className="text-4xl text-center font-semibold mb-8 text-white">
          Login
        </h1>
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
          {errorMessage == "UserNotFound" ? <p>Nutzer nicht gefunden!</p> : ""}
          {errorMessage == "WrongPW" ? <p>Passwort inkorrekt!</p> : ""}
        </form>
        <div className="text-center text-white mt-4">- ODER -</div>
        <Link
          className="block text-center text-blue-500 hover:underline mt-2"
          href="/register"
        >
          Neu registrieren
        </Link>
      </div>
    </main>
  );
};

export default Login;
