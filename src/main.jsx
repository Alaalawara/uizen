import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import RootLayout from './Layout/RootLayout.jsx'
import LandingPage from './Pages/LandingPage.jsx'
import Contact from './components/Contact.jsx'

const router = createBrowserRouter([
  {
    path: '/uizen',
    element: <RootLayout />,          // Persistent header & footer
    children: [
      { index: true, element: <LandingPage /> },        // "/"
      { path: 'contact', element: <Contact /> }, // "/contact"
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
