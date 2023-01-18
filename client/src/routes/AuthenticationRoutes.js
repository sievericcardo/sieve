import { lazy } from 'react';

import Loadable from '../components/ui/Loadable';
import AuthLayout from '../layout/AuthLayout';

const SignIn = Loadable(lazy(() => import('../components/auth/SignIn')));
const SignUp = Loadable(lazy(() => import('../components/auth/SignUp')));

const AuthenticationRoutes = {
  path: '/',
  element: <AuthLayout />,
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
