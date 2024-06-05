import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './views/Home.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './router/index.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
