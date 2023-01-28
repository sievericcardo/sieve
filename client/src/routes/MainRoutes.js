import { lazy } from 'react';

import Loadable from '../components/ui/Loadable';
import MainLayout from '../layout/MainLayout';

const Home = Loadable(lazy(() => import('../components/pages/Home')));
const Project = Loadable(lazy(() => import('../components/pages/Project')));
const Article = Loadable(lazy(() => import('../components/pages/Article')));

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/project/:id',
      element: <Project />
    },
    {
      path: '/article/:id',
      element: <Article />
    }
  ]
};

export default MainRoutes;
