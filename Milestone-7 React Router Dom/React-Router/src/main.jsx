import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './components/Root/Root.jsx'
import Home from './components/Home/Home.jsx'
import Mobile from './components/Mobile/Mobile.jsx'
import Laptop from './components/Laptop/Laptop.jsx'
import Users from './components/Users/Users.jsx'
import Users2 from './components/Users2/Users2.jsx'

const usersPromise = fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json());

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'mobile', Component: Mobile },
      { path: 'laptop', Component: Laptop },
      {
        path: 'users',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        Component: Users,
      },
      {
        path: 'users2',
        element: (
          <Suspense fallback={<span>Loading...</span>}>
            <Users2 usersPromise={usersPromise}></Users2>
          </Suspense>
        ),
      },
    ],
  },
  {
    path: 'blogs',
    element: <h2>Welcome to my blogs</h2>,
  },
  {
    path: 'about',
    element: <h2>About Me</h2>,
  },
  {
    path: 'app',
    Component: App,
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
