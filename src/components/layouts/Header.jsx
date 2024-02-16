import React from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='flex gap-12 items-center p-6 w-full border-b border-white'>
      <h1 className='text-4xl font-bold'>Etherial</h1>
      <div className="flex gap-4">
        <a href="/">Home</a>
        <a href="/cart">Panier </a>
      </div>
    </header>
  )
}
