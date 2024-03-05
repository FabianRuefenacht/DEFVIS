"use client";
import React from "react";
import { useState } from "react";
import Button from "./Button";

const Settings = () => {
  // handling klick outside the modal
  const handleOutsideClick = (e: any) => {
    if (e.target.id == "modal") {
      setNewProj(false);
      setOpenProj(false);
      setNewSession(false);
    }
  };

  // create new project functionalities
  const [newProj, setNewProj] = useState(false);

  function changeNewProj() {
    setNewProj(!newProj);
  }

  const handleNewProjectSubmit = async (e: any) => {
    e.preventDefault();
    const projectname = e.target[0].value;
    const customer = e.target[1].value;

    console.log(projectname, customer);

    changeNewProj();
  }

  // Open Project functionalities
  const [openProj, setOpenProj] = useState(false);

  function changeOpenProj() {
    setOpenProj(!openProj);
  }

  // capture new session functinalities
  const [newSession, setNewSession] = useState(false);

  function changeNewSession() {
    setNewSession(!newSession);
  }

  return (
    <main className="bg-slate-500 row-span-4 pl-7 pr-2 h-full">
      <h1>Settings</h1>
      <Button clickFunc={changeNewProj} text="Neues Projekt" />
      {newProj && (
        <div
          id="modal"
          onClick={handleOutsideClick}
          className=" fixed inset-0 flex items-center justify-center  bg-zinc-600/40"
        >
          <div className=" bg-zinc-600 m-auto w-1/2 p-5 rounded-3xl relative">
            <button
              onClick={changeNewProj}
              className=" px-2 float-right text-5xl absolute top-0 right-0"
            >
              &times;
            </button>
            <form onSubmit={handleNewProjectSubmit}>
              <h1 className=" text-3xl font-semibold mb-8">Neues Projekt erstellen</h1>
              <p>Projektname</p>
              <input
                type="text"
                className="w-full border border-gray-300 my-2 mb-8 text-black rounded px-3 py-2 focus:outline-none focus:border-blue-400 focus:text-black"
                placeholder="Projektname"
                required
              />
              <p>Projektersteller</p>
              <p className=" my-2 mb-8">a@b.ch</p>
              <p>Kunde</p>
              <input
                type="email"
                className="w-full border border-gray-300 my-2 mb-8 text-black rounded px-3 py-2 focus:outline-none focus:border-blue-400 focus:text-black"
                placeholder="Kunde"
                required
              />
              <button
                type="submit"
                className="w-full bg-blue-500 my-2 text-white py-2 rounded hover:bg-blue-600"
              >
                Projekt erstellen
              </button>
            </form>
          </div>
        </div>
      )}

      <Button clickFunc={changeOpenProj} text="Projekt öffnen" />
      {openProj && (
        <div
          id="modal"
          onClick={handleOutsideClick}
          className=" fixed inset-0 flex items-center justify-center  bg-zinc-600/40"
        >
          <div className=" bg-zinc-600 m-auto w-1/2 p-5 rounded-3xl relative flex flex-col">
            <button
              onClick={changeOpenProj}
              className=" px-2 float-right text-5xl absolute top-0 right-0"
            >
              &times;
            </button>
              <h1 className=" text-3xl font-semibold mb-8">Projekt öffnen</h1>
            <button>
              Projekt 1
            </button>
            <button>
              Projekt 2
            </button>
            <button>
              Projekt 3
            </button>
            <button>
              Projekt 4
            </button>
          </div>
        </div>
      )}

      <Button clickFunc={changeNewSession} text="Session erfassen" />
      {newSession && (
        <div
          id="modal"
          onClick={handleOutsideClick}
          className=" fixed inset-0 flex items-center justify-center  bg-zinc-600/40"
        >
          <div className=" bg-zinc-600 m-auto w-1/2 p-5 rounded-3xl relative">
            <button
              onClick={changeNewSession}
              className=" px-2 float-right text-5xl absolute top-0 right-0"
            >
              &times;
            </button>
              <h1 className=" text-3xl font-semibold">Session erfassen</h1>
              <h1 className=" text-2xl font-semibold mb-8">Projekt: X</h1>
            <button>Datei öffnen</button>
            <p>Pt1,Data</p>
            <p>Pt2,Data</p>
            <p>Pt3,Data</p>
            <p>Pt4,Data</p>
            <p>Pt5,Data</p>
            <button>Session hochladen</button>
          </div>
        </div>
      )}
    </main>
  );
};

export default Settings;
