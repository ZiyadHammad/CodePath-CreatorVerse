import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './index.css'
import MainLayout from "./layouts/MainLayout";
import { ShowCreators, EditCreator, AddCreator, ViewCreator } from './pages';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <ShowCreators />,
      },
      {
        path: ":id",
        element: <ViewCreator />,
      },
     
      {
        path: "edit",
        element: <EditCreator />,
      },
      {
        path: "add",
        element: <AddCreator />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);