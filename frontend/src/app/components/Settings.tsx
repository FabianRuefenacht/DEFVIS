"use client"
import React from 'react'
import { useState } from 'react'
import Button from './Button'

const Settings = () => {
    const [first, setfirst] = useState("str")
  return (
    <main className="bg-slate-500 row-span-4">
        <h1>Settings</h1>
        <Button text="Neues Projekt" />
        <Button text="Projekt öffnen" />
        <Button text="Festpunktdefinition" />
        <Button text="Session erfassen" />
    </main>
  )
}

export default Settings