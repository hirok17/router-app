import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Header from './component/header/Header'
import Home from './component/home/Home'
import Products from './component/products/Products'
import About from './component/about/About'
import Dashboard from './component/Dashboard/Dashboard'
import Cart from './component/cart/Cart'
// import Footer from './component/about/footer/Footer'

const myCreatRoute = createBrowserRouter([
  {
    path:"/",
    element: <Header></Header>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/products",
        loader:()=>fetch('https://dummyjson.com/products'),
        element:<Products></Products>
        
      },
      {
        path:"/cart/:id",
        loader:({params})=>fetch(`https://dummyjson.com/products/${params.id}`),
        element:<Cart></Cart>
      },
      {
        path:"/about",
        element:<About></About>
      },
      {
        path:"/dashboard",
        element:<Dashboard></Dashboard>
      }
    ]
  }
  // {
  //   path:"/",
  //   element:<Footer></Footer>
  // }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={myCreatRoute}></RouterProvider>
  </React.StrictMode>,
)
