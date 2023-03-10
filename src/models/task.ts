/* eslint-disable no-unused-vars */
type HasId = {
  id: string;
};

export type ProtoTaskStructure = {
  name: string;
  isAdopted: boolean;
  owner: string;
};

export type TaskStructure = HasId & ProtoTaskStructure;

export class Task implements TaskStructure {
  public id: string;
  public isAdopted: boolean;
  static generateId() {
    const aNumbers = new Uint32Array(1);
    crypto.getRandomValues(aNumbers);
    return ('000000' + aNumbers[0]).slice(-6);
  }

  constructor(public name: string, public owner: string) {
    this.id = Task.generateId();
    this.isAdopted = false;
  }
}
