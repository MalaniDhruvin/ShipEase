import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './components/HomePage.jsx'
import Ship from './components/Ship.jsx'
import Login from './components/Login.jsx';
import Marquee from './components/Marquee.jsx'
import Detail from './components/Detail.jsx'
import Pricing from './components/Pricing.jsx'

const Router = createBrowserRouter([{
  path: '/', element: <App />, children: [
    { path: '/login', element: <Login></Login> },
    { path: '/ship', element: <Ship></Ship> },
    { path: '/', element: <HomePage /> },
    { path: '/pricing', element: <Pricing></Pricing> }
  ]
},])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>,
)
