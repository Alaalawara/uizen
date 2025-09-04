// src/main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import RootLayout from "./Layout/RootLayout.jsx";
import LandingPage from "./Pages/LandingPage.jsx";
import Contact from "./components/Contact.jsx";
import NotFound from "./Pages/notfound.jsx";

// Components area
//buttons
import ButtonPage from "./components/buttons/ButtonPage.jsx";
import ThreedButtonPage from "./components/buttons/3dbuttonPage.jsx";
import OnTapButtonPage from "./components/buttons/OntapButtonPage.jsx";

//cards
import SimpleCardPage from "./components/cards/SimpleCardPage.jsx";
import HoverCardPage from "./components/cards/Hovercard.jsx";
import BlockTextCardPage from "./components/cards/BlockTextCards.jsx";

import ComponentsLayout from "./Pages/componentslayout.jsx";
import Components from "./components/components.jsx";
import AppShell from "./Layout/AppLayout .jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <AppShell>
      <NotFound />
    </AppShell>, // persistent header/footer
    children: [
      { index: true, element: <LandingPage /> },
      { path: "contact", element: <Contact /> },

      {
        path: "components",
        element: <ComponentsLayout />,   // sidebar + Outlet
        children: [
          { index: true, element: <Components /> }, // grid listing

          //buttons
          { path: "buttons/button", element: <ButtonPage /> },
          { path: "buttons/3d-button", element: <ThreedButtonPage /> },
          { path: "buttons/ontapbutton", element: <OnTapButtonPage /> },


          //cards
          { path: "cards/simplecard", element: <SimpleCardPage /> },
          { path: "cards/hovercard", element: <HoverCardPage /> },
          { path: "cards/BlockTextCard", element: <BlockTextCardPage /> },
          { path: "*", element: <NotFound /> },
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
