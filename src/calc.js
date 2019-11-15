export class User {
  constructor(name, age, death) {
    this.name = name;
    this.age = age;
    this.death = death;
    this.aging = {
      mercury: 4.16,
      venus: 1.61,
      mars: .532,
      jupiter: .084
    };
  }

  planetAge(age, aging) {
    return Math.floor(age * aging);
  }
  
  deathClock(death, age) {
    let yearsLeft = Math.floor(death - age);
    let pastExp = Math.floor(age - death);
    if(yearsLeft < 0) {
      return pastExp;
    } else {
      return yearsLeft;
    }
  }

}
