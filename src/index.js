import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomeView from './pages/HomeView';
import CartView from './pages/CartView';
import ProductView from './pages/ProductView';
import ErrorView from './pages/ErrorView';
import Header from './components/layouts/Header';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeView />,
    errorElement: <ErrorView />
  },
  {
    path: '/cart',
    element: <CartView />
  },
  {
    path: '/product/:id',
    element: <ProductView />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
