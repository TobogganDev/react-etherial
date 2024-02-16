import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom';
import CartContext from '../context/CartContext';
import { useGetProductsQuery, useGetCommentsQuery, useCreateCommentMutation } from '../services/productsApi';


export default function ProductView() {

  // Products query
  const { data, isLoading } = useGetProductsQuery()
  const { productId } = useParams();
  const { addToCart } = useContext(CartContext);

  const product = data?.find((product) => product.id === productId);

  const handleAddToCart = () => {
    addToCart(product)
  }

  // Comments query
  const { data: commentsData, isLoading: isLoadingComments } = useGetCommentsQuery(productId);
  const [createComment] = useCreateCommentMutation();
  const [newComment, setNewComment] = useState('');
  const [username, setUsername] = useState('');

  const comments = commentsData ? commentsData.slice(-10) : [];

  const handleSubmitComment = async (e) => {
    e.preventDefault();
    await createComment({ productId: product.id, username, comment: newComment });
    setNewComment('');
    setUsername('');
  };

  if (isLoading || isLoadingComments) {
    return <div>Loading...</div>;
  }

  return (
    <div className='flex gap-80 p-28'>
      <div className="max-w-80">
        <img src={product.image} alt="" />
      </div>
      <div className='flex flex-col gap-8'>
        <h2 className="text-4xl font-bold">{product.title}</h2>
        <p>In stock : {product.quantity}</p>
        <p className='text-2xl font-semibold text-yellow-400'>{product.price}€</p>
        <button onClick={handleAddToCart} className='w-fit rounded-lg p-2 bg-green-600 text-white'>Add to cart</button>

        <div className="">
          <h3 className='text-lg underline uppercase mb-3'>Comments</h3>
          <div className="flex flex-wrap gap-4">
            {comments.map((comment) => (
              <div key={comment.id} className="w-56 p-2 rounded-lg bg-white/30">
                <h3 className='underline mb-2'>{comment.username}</h3>
                <p>{comment.comment}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <p>Create comment</p>
            <form onSubmit={handleSubmitComment} className='flex flex-col gap-4 mt-4'>
              <input className='p-2 bg-transparent outline-none border border-white rounded-lg' type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
              <input className='p-2 bg-transparent outline-none border border-white rounded-lg' type="text" placeholder="Comment" value={newComment} onChange={(e) => setNewComment(e.target.value)}/>
              <button type='submit' className='w-fit rounded-lg p-2 bg-blue-600 text-white'>Post comment</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
