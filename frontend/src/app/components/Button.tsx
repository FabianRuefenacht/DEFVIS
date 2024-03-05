"use client"
import React from 'react';

const Button = ({ text }: { text: string }) => {
  return (
    <main>
      <p>
        <button>{text}</button>
      </p>
    </main>
  );
};

export default Button;