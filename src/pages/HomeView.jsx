import React from 'react'
import { useGetProductsQuery } from '../services/productsApi';

import ProductCard from '../components/ProductCard';

export default function HomeView() {
  
  let { data, isLoading } = useGetProductsQuery()

  return (
    <div className='p-28'>
    <h1 className='text-3xl underline uppercase'>All our products</h1>
    <div className='flex gap-12 mt-12 flex-wrap'>
      {
        !isLoading ?
        data.map((product) => {
          return <ProductCard key={product.id} product={product} />
        }) :
        <span>Loading...</span>
      }
    </div>
    </div>
    )
}
