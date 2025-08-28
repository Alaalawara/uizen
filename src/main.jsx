// src/main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import RootLayout from "./Layout/RootLayout.jsx";
import LandingPage from "./Pages/LandingPage.jsx";
import Contact from "./components/Contact.jsx";

// Components area
import Threedbutton from "./components/buttons/3d-button.jsx";
import HovercardDemo from "./components/cards/HovercardDemo.jsx";

import ComponentsShell from "./Pages/ComponentsShell.jsx";
import ComponentsShowcase from "./Pages/ComponentsShowcase.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />, // persistent header/footer
    children: [
      { index: true, element: <LandingPage /> },
      { path: "contact", element: <Contact /> },

      {
        path: "components",
       element: <ComponentsShell />,   // sidebar + Outlet
  children: [
    { index: true, element: <ComponentsShowcase /> }, // grid listing
    { path: "buttons/3d", element: <Threedbutton /> }, // Visualizer
    { path: "cards/hover", element: <HovercardDemo /> },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
