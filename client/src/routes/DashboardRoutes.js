import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';

import Loadable from '../compnents/ui/Loadable';

const Dashboard = Loadable(lazy(() => import('../components/dashboard/Dashboard')));
const Chart = Loadable(lazy(() => import('../components/dashboard/Chart')));
const ManageArticles = Loadable(lazy(() => import('../components/dashboard/articles/ManageArticles')));
const ManageMedias = Loadable(lazy(() => import('../components/dashboard/medias/ManageMedias')));
const ManageProjects = Loadable(lazy(() => import('../components/dashboard/projects/ManageProjects')));
const ManageWriteups = Loadable(lazy(() => import('../components/dashboard/writeups/ManageWriteups')));

const DashboardRoutes = {
  path: '/cms-dashboard',
  children: [
    {
      path: '/',
      element: <Dashboard />
    },
    {
      path: 'chart',
      element: <Chart />
    },
    {
      path: 'articles',
      element: <ManageArticles />
    },
    {
      path: 'medias',
      element: <ManageMedias />
    },
    {
      path: 'projects',
      element: <ManageProjects />
    },
    {
      path: 'writeups',
      element: <ManageWriteups />
    },
  ]
};

export default function ThemeRoutes() {
  return useRoutes(DashboardRoutes);
}
