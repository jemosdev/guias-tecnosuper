import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx';
import HomePage from './pages/HomePage.jsx'
import GuidePage from './pages/GuidePage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path:'/',
    element: <HomePage />,
    errorElement: <NotFoundPage/>
  },
  {
    path:'/guides',
    element: <GuidePage />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} >
    <App />
    </RouterProvider>
  </React.StrictMode>
);
