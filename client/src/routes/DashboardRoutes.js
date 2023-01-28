import { lazy } from 'react';

import Loadable from '../components/ui/Loadable';
import DashboardLayout from '../layout/DashboardLayout';

const Dashboard = Loadable(lazy(() => import('../components/dashboard/Dashboard')));
const Chart = Loadable(lazy(() => import('../components/dashboard/Chart')));
const ManageArticles = Loadable(lazy(() => import('../components/dashboard/articles/ManageArticles')));
const ManageMedias = Loadable(lazy(() => import('../components/dashboard/medias/ManageMedias')));
const ManageProjects = Loadable(lazy(() => import('../components/dashboard/projects/ManageProjects')));
// const ManageWriteups = Loadable(lazy(() => import('../components/dashboard/writeups/ManageWriteups')));

const DashboardRoutes = {
  path: '/',
  element: <DashboardLayout />,
  children: [
    {
      path: '/cms/dashboard',
      element: <Dashboard />
    },
    {
      path: '/cms/chart',
      element: <Chart />
    },
    {
      path: '/cms/writeups',
      element: <ManageArticles />
    },
    {
      path: '/cms/medias',
      element: <ManageMedias />
    },
    {
      path: '/cms/projects',
      element: <ManageProjects />
    },
  ]
};

export default DashboardRoutes;
