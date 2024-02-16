import React, { useEffect, useState, useContext } from 'react'
import CartContext from '../../context/CartContext';

export default function Header() {

  const [itemCount, setItemCount] = useState(0);
  const cartContext = useContext(CartContext);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems'));
    setItemCount(storedCartItems ? storedCartItems.length : 0);
}, [cartContext]);

  return (
    <header className='flex gap-12 items-center p-6 w-full border-b border-white'>
      <h1 className='text-4xl font-bold'>Etherial</h1>
      <div className="flex gap-4">
        <a href="/">Home</a>
        <a href="/cart" className='relative'>
          Panier
          <div className='w-6 h-6 absolute -right-6 -top-4 bg-red-500 text-white rounded-full flex items-center justify-center text-xs'>{itemCount}</div>
        </a>
      </div>
    </header>
  )
}
