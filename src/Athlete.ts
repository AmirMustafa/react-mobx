import { makeObservable, observable } from "mobx";
class Athlete {
  name: string;
  age: number;
  teamHistory: string[];

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    this.teamHistory = [];

    makeObservable(this, {
      name: observable,
      age: observable,
      teamHistory: true,
    });
  }
}

export default Athlete;
