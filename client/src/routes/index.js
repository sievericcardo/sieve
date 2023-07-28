import { useRoutes } from 'react-router-dom';

import MainRoutes from './MainRoutes';
import AuthenticationRoutes from './AuthenticationRoutes';
import DashboardRoutes from './DashboardRoutes';

export default function ThemeRoutes({ animeState }) {
  const routes = [
      MainRoutes(animeState),
      AuthenticationRoutes,
      DashboardRoutes,
    ];
  
  return useRoutes(routes);
}
