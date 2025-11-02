import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import NewProjectPage from '../pages/NewProjectPage';
import AWSConnectionPage from '../pages/AWSConnectionPage';
import HomePage from '../pages/HomePage';
import DeploymentStatusPage from '../pages/DeploymentStatusPage';

// Note: The DeploymentStatusPage will be added later.

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'new',
        element: <NewProjectPage />,
      },
      {
        path: 'projects/new/connect-aws',
        element: <AWSConnectionPage />,
      },
      {
        path: '/deployment-status',
        element: <DeploymentStatusPage />,
      },
      // The route for the deployment status page will be added here.
    ],
  },
]);