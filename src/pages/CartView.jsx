import React, { useContext } from 'react'

import CartContext from '../context/CartContext';

export default function CartView() {

  const localCart = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];

  const { emptyCart } = useContext(CartContext);
  const { removeFromCart } = useContext(CartContext);

  const groupedCartItems = localCart.reduce((acc, item) => {
    acc[item.id] = acc[item.id] || { ...item, quantity: 0 };
    acc[item.id].quantity += 1;
    return acc;
  }, {});

  const cartItems = Object.values(groupedCartItems);

  console.log(cartItems)

  const handleRemoveItem = (productId) => {
    removeFromCart(productId);
  }

  return (
    <div className='p-28'>
      <div className='flex justify-between'>
        <h2>Cart</h2>
        <button onClick={emptyCart}>Empty cart</button>
      </div>
      <div className='flex flex-col mt-12'>
        {
          cartItems.length === 0 ? 
          'Cart is empty' :
          cartItems.map((item, index) => {
            return (
              <div key={index} className='flex justify-between items-center border-b py-2'>
                <div>
                  <h3>{item.title}</h3>
                  <p className='text-white/60'>{item.price}€</p>
                </div>
                <div className='flex items-center gap-4'>
                  <p>Quantity: {item.quantity}</p>
                  <button onClick={() => {handleRemoveItem(item.id)}} className='p-2 bg-red-500 rounded-lg'>Remove</button>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
