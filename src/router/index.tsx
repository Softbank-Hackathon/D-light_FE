
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import LoginPage from '../pages/LoginPage';
import DashboardPage from '../pages/DashboardPage';
import NewProjectPage from '../pages/NewProjectPage';
import ProjectPage from '../pages/ProjectPage';
import DeploymentPage from '../pages/DeploymentPage';

import HomePage from '../pages/HomePage';

export const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'dashboard',
        element: <DashboardPage />,
      },
      {
        path: 'new',
        element: <NewProjectPage />,
      },
      {
        path: 'projects/:projectId',
        element: <ProjectPage />,
      },
      {
        path: 'deployments/:deploymentId',
        element: <DeploymentPage />,
      },
    ],
  },
]);
