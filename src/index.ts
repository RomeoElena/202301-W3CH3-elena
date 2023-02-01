/* eslint-disable no-new */
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { Menu } from './components/menu/menu';
import './index.scss';

export type InitMenu = {
  label: string;
  path: string;
};

const InitMenu: InitMenu[] = [
  { label: 'Inicio', path: '/home' },
  { label: 'Pet', path: '/tasks' },
  { label: 'Nosotros', path: '/about' },
];

console.log('Work in progress');
new Header('#root');
new Menu('.header', InitMenu);
new Footer('#root');
