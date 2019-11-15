export class User {
  constructor(name, age, death) {
    this.name = name;
    this.age = age;
    this.death = death;
  }

  mercuryAge(age) {
    return Math.floor(age * (1 / .24));
  }
  venusAge(age) {
    return Math.floor(age * (1 / .62));
  }
  marsAge(age) {
    return Math.floor(age / 1.88);
  }
  jupiterAge(age) {
    return Math.floor(age / 11.86);
  }
  yearsLeft(death, age) {
    return Math.floor(death - age)
  }

}
