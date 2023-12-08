import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LandingHomePage from './pages/landing/Home.tsx'
import LandingLayout from './layout/Landing.tsx'
import SearchCarPage from './pages/landing/SearchCar.tsx'
import DashboardLayout from './layout/Dashboard.tsx'
import DashboardHomePage from './pages/dashboard/Home.tsx'
import DashboardCarsPage from './pages/dashboard/Cars.tsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

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
    path: '/dashboard',
    element: <DashboardLayout/>,
    children: [
      {
        path: '/dashboard',
        element: <DashboardHomePage/>
      },
      {
        path: '/dashboard/cars',
        element: <DashboardCarsPage/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
