import React, { useContext } from 'react'
import CartContext from '../context/CartContext'

export default function ProductCard({ product }) {

  const { addToCart } = useContext(CartContext)

  const handleAddToCart = () => {
    addToCart(product)
  }

  return (
    <div className='flex flex-col gap-4 bg-white/30 rounded-lg overflow-hidden'>
      <img src={product.image} alt={product.title} className='w-64 h-64 object-cover' />
      <div className="p-4">
        <h3 className='font-semibold text-xl'>{product.title}</h3>
        <div className="flex justify-between items-center">
          <p>In stock : {product.quantity}</p>
          <p className='text-yellow-400 text-xl'>{product.price}€</p>
        </div>
        <div className='flex gap-2 mt-4'>
          <a href={`/product/${product.id}`} className='rounded-lg w-full py-2 px-2 bg-blue-600 text-white'>View product</a>
          <button onClick={handleAddToCart} className='rounded-lg w-full py-2 bg-green-600 text-white'>Add to cart</button>
        </div>
      </div>
    </div>
  )
}
