import { lazy } from 'react';

import Loadable from '../compnents/ui/Loadable';

const SignIn = Loadable(lazy(() => import('../components/auth/SignIn')));
const SignUp = Loadable(lazy(() => import('../components/auth/SignUp')));

const AuthenticationRoutes = {
  path: '/',
  children: [
    {
      path: '/auth/signin',
      element: <SignIn />
    },
    {
      path: '/auth/signup',
      element: <SignUp />
    },
  ]
};

export default AuthenticationRoutes;
