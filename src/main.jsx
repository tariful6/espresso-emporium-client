import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {  RouterProvider,} from "react-router-dom";
import './index.css'
import myRouter from './Router/Route';
import AuthProvider from './Provider/AuthPRovider';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
       <RouterProvider router={myRouter} />
    </AuthProvider>
  </StrictMode>,
)
