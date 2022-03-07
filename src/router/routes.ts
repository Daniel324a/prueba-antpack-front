import { HomeView } from '../views/HomeView';
import { NewUser } from '../views/NewUser';

interface AppRoute {
  name: string;
  path: string;
  Component: React.ComponentType;
}

export const routes: AppRoute[] = [
  {
    name: 'home',
    path: '/',
    Component: HomeView,
  },
  {
    name: 'newUser',
    path: '/new',
    Component: NewUser,
  },
];
