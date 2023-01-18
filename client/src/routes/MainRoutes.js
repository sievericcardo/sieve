import { lazy } from 'react';

import Loadable from '../compnents/ui/Loadable';

const Home = Loadable(lazy(() => import('../components/pages/Home')));
const Writeup = Loadable(lazy(() => import('../components/pages/Writeup')));
const Projects = Loadable(lazy(() => import('../components/pages/Projects')));
const DisplayWriteups = Loadable(lazy(() => import('../components/pages/DisplayWriteups')));

const MainRoutes = {
  path: '/',
  children: [
    {
      path: '/',
      element: <Home />
    },
    {
      path: 'writeups',
      element: <DisplayWriteups />
    },
    {
      path: 'writeups/:id',
      element: <Writeup />
    },
  ]
};

export default MainRoutes;
