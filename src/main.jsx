// src/main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import RootLayout from "./Layout/RootLayout.jsx";
import LandingPage from "./Pages/LandingPage.jsx";
import Contact from "./components/Contact.jsx";

// Components area
//buttons
import ButtonPage from "./components/buttons/ButtonPage.jsx";
import ThreedButtonPage from "./components/buttons/3dbuttonPage.jsx";
import OnTapButtonPage from "./components/buttons/OntapButtonPage.jsx";

//cards
import SimpleCard from "./components/cards/SimpleCard.jsx";
import HoverCardPage from "./components/cards/Hovercard.jsx";
import BlockTextCardPage from "./components/cards/BlockTextCards.jsx";

import ComponentsLayout from "./Pages/componentslayout.jsx";
import Components from "./components/components.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />, // persistent header/footer
    children: [
      { index: true, element: <LandingPage /> },
      { path: "contact", element: <Contact /> },

      {
        path: "components",
       element: <ComponentsLayout />,   // sidebar + Outlet
  children: [
    { index: true, element: <Components  /> }, // grid listing

    //buttons
    { path: "buttons/button", element: <ButtonPage /> },
    { path: "buttons/3d-button", element: <ThreedButtonPage /> },
    { path: "buttons/ontapbutton", element: <OnTapButtonPage /> },


    //cards
    { path: "cards/simplecard", element: <SimpleCard /> },
    { path: "cards/hovercard", element: <HoverCardPage /> },
    { path: "cards/BlockTextCard", element: <BlockTextCardPage /> },


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
