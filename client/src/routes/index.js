import { useRoutes } from 'react-router-dom';

import MainRoutes from './MainRoutes';
import AuthenticationRoutes from './AuthenticationRoutes';
import DashboardRoutes from './DashboardRoutes';

export default function ThemeRoutes() {
    return useRoutes([MainRoutes, AuthenticationRoutes, DashboardRoutes]);
}
