import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { route } from './routes/Routes.jsx'
import FirebaseProvider from './firebase/FirebaseProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FirebaseProvider>
      <RouterProvider router={route}>
      </RouterProvider>
    </FirebaseProvider>
  </StrictMode>,
)
