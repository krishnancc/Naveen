import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
//
import SimpleLayout from './layouts/simple';
import Index from './pages/index';
import Page404 from './pages/Page404';

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([

    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/portfolio" />, index: true },
        { path: 'portfolio', element: <Index /> },
      ],
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/portfolio" />, index: true },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
