import { InitMenu } from '../../index';
import { Component } from '../component/component';
import './menu.scss';

export class Menu extends Component {
  // eslint-disable-next-line no-unused-vars
  constructor(public selector: string, public InitMenus: InitMenu[]) {
    super();
    this.template = this.createTemplate();
    this.render('beforeend');
  }

  createTemplate() {
    const items = this.InitMenus.map(
      (item) => `<li><a href="${item.path}">${item.label}</a></li>`
    ).join('\n');
    return `
    <nav class="menu"><ul>${items}</ul></nav>
    `;
  }
}
