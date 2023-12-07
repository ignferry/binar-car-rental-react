import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LandingHomePage from './pages/landing/Home.tsx'
import LandingLayout from './layout/Landing.tsx'
import SearchCarPage from './pages/landing/SearchCar.tsx'

const router = createBrowserRouter([
  {
    path: '',
    element: <LandingLayout/>,
    children: [
      {
        path: '',
        element: <LandingHomePage/>
      },
      {
        path: '/cars',
        element: <SearchCarPage/>
      }
    ]
  },
  {
    path: '/cars',
    element: <App/>
  },
  {
    path: '/dashboard',
    element: <App/>
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
