import { Task, TaskStructure } from '../models/task';

export const TASK: TaskStructure[] = [
  { id: '164983', name: 'Mellow', isAdopted: false, owner: 'Pepe' },
  new Task('Oddie', 'Jack Russel'),
  new Task('Loba', 'Mestizo'),
];
