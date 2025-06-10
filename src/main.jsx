import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {  RouterProvider,} from "react-router-dom";
import './index.css'
import myRouter from './Router/Route';




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={myRouter} />
  </StrictMode>,
)
