import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import DeployPage from "../pages/DeployPage";
import AWSConnectionPage from "../pages/AWSConnectionPage";
import HomePage from "../pages/HomePage";
import DeploymentStatusPage from "../pages/DeploymentStatusPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "deploy", // Formerly /new
        element: <DeployPage />,
      },
      {
        path: "connect", // Formerly /projects/new/connect-aws
        element: <AWSConnectionPage />,
      },
      {
        path: "status", // Formerly /deployment-status
        element: <DeploymentStatusPage />,
      },
    ],
  },
]);
