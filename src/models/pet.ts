/* eslint-disable no-unused-vars */
type HasId = {
  id: string;
};

export type ProtoPetStructure = {
  name: string;
  isAdopted: boolean;
  owner: string;
};

export type PetStructure = HasId & ProtoPetStructure;

export class Task implements PetStructure {
  public id: string;
  public isAdopted: boolean;
  static generateId() {
    const aNumbers = new Uint32Array(1);
    crypto.getRandomValues(aNumbers);
    return ('000000' + aNumbers[0]).slice(-6);
  }

  constructor(public name: string, public owner: string, public breed: string) {
    this.id = Task.generateId();
    this.isAdopted = false;
  }
}
