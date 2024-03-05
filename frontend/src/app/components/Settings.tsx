"use client"
import React from 'react'
import { useState } from 'react'
import { Button } from './button'

const Settings = () => {
    const [first, setfirst] = useState("str")
  return (
    <main className="bg-slate-500 row-span-4">
        <h1>Settings</h1>
        <Button btnName="Test" />
        <button>Neues Projekt</button>
        <button>Projekt öffnen</button>
        <button>Festpunktdefinition</button>
        <button>Session erfassen</button>

    </main>
  )
}

export default Settings