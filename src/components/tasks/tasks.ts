/* eslint-disable no-unused-vars */
import { TaskStructure } from '../../models/task';
import { Component } from '../component/component';
import './tasks.scss';

export class Tasks extends Component {
  constructor(public selector: string, public tasks: TaskStructure[]) {
    super();
    this.template = this.createTemplate();
    this.render('afterbegin');
  }

  createTemplate() {
    const items = this.tasks
      .map(
        (item) => `
        <li class="card">
        <div title="${item.id}">Name: ${item.name}</div>
          <div>Adopted: ${item.isAdopted}</div>
          <div>Owner: ${item.owner}</div>
          <button>🗑️</button>
        </li>`
      )
      .join('\n');
    return `
    <section class="tasks"><ul class="tasks__list">${items}</ul></section>
    `;
  }

  render(place: globalThis.InsertPosition) {
    super.render(place);

    /*  Const button = document.querySelectorAll('button')
    button.forEach(item => {
      item.addEventListener('click', deleteTask(this.selector))
    });
    function deleteTask(params: HTMLElement) {
    } */
  }
}
