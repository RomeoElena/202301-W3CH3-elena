import { Component } from '../component/component';
import './header.scss';

export class Header extends Component {
  constructor(public selector: string, public title: string = 'Pet List') {
    super();
    this.template = this.createTemplate();
    this.render('afterbegin');
  }

  private createTemplate() {
    return `
      <header class="header">
        <h1>${this.title}</h1>
        <p role="note" aria-label="info">Al adoptar a un perro tendrás un amigo fiel para siempre :)</p>
        <p role="note" aria-label="info">Te ayudará a sonreir hasta en los momentos más difíciles.</p>
      </header>
    `;
  }

  render(place: globalThis.InsertPosition) {
    super.render(place);
  }
}
