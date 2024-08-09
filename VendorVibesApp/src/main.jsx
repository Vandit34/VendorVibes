import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layer from './Layer.jsx'

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from 'react-router-dom'
import FoodDisplay from './FoodDisplay.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layer />}>
      <Route path='' element={<App />}></Route>
      <Route path='foodDisplay' element={<FoodDisplay />}></Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
