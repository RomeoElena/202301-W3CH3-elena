/* eslint-disable no-new */
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { Menu } from './components/menu/menu';
import { Tasks } from './components/tasks/tasks';
import { TASK } from './mocks/tasks';
import './index.scss';

export type InitMenu = {
  label: string;
  path: string;
};

const InitMenus: InitMenu[] = [
  { label: 'Inicio', path: '/home' },
  { label: 'Pets', path: '/tasks' },
  { label: 'Sobre nosotros', path: '/about' },
];

console.log('Work in progress');
new Header('#root');
new Menu('.header', InitMenus);
new Footer('#root');
new Tasks('main', TASK);
