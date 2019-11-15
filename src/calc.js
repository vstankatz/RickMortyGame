export class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  mercuryAge(age) {
    return Math.floor(age * (1 / .24));
  }
  venusAge(age) {
    
  }
}
