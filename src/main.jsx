import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import ErrorPage from "./pages/404";
import { WildCoinProvider } from "./components/WildCoin/WildCoinContext";
import Ameliorations from "./components/WildCoin/Amelioration";
import Boutique from "./pages/Boutique";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
      {
        path: "/ameliorations",
        element: <Ameliorations />,
      },
      {
        path: "/boutique",
        element: <Boutique />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <WildCoinProvider>
      <RouterProvider router={router} />
    </WildCoinProvider>
  </React.StrictMode>
);
