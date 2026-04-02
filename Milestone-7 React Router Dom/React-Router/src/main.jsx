import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './components/Root/Root.jsx'
import Home from './components/Home/Home.jsx'
import Mobile from './components/Mobile/Mobile.jsx'
import Laptop from './components/Laptop/Laptop.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'mobile', Component: Mobile },
      { path: 'laptop', Component: Laptop },
      
    ]
  }, 
  {
    path: 'blogs',
    element: <h2>Welcome to my blogs</h2>
  },
  {
    path: 'about',
    element: <h2>About Me</h2>
  },
  {
    path: 'app',
    Component: App
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
