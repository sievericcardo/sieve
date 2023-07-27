import { lazy } from 'react';

import Loadable from '../components/ui/Loadable';
import MainLayout from '../layout/MainLayout';
import AnimeLayout from '../layout/AnimeLayout';

const Home = Loadable(lazy(() => import('../components/pages/Home')));
const Project = Loadable(lazy(() => import('../components/pages/Project')));
const Article = Loadable(lazy(() => import('../components/pages/Article')));

const MainRoutes = (animeState) => {
  const layoutElement = animeState ? <AnimeLayout /> : <MainLayout />;

  return {
    path: '/',
    element: layoutElement,
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
  }
};

export default MainRoutes;
