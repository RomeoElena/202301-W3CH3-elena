import { Pet, PetStructure } from '../models/pet';

export const TASK: PetStructure[] = [
  { id: '164983', name: 'Mellow', isAdopted: false, owner: 'Pepe' },
  new Pet('Oddie', 'Jack Russel', 'Luis'),
  new Pet('Loba', 'Mestizo', 'Elena'),
  new Pet('Tyson', 'Labrador', 'Lucía'),
];
