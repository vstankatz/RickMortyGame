import { User } from "./../src/calc.js";

describe('user', () => {

  test('users age on mercury', () => {
    let user = new User('mike', 32);
    expect(user.mercuryAge(user.age)).toEqual(133);
  })

  test('users age on venus', () => {
    let user = new User('mike', 32);
    expect(user.venusAge(user.age)).toEqual(52)
  })
})
