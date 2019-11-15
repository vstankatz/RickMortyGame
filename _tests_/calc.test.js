import { User } from "./../src/calc.js";

describe('user', () => {

  test('users age on mercury', () => {
    let user = new User('mike', 32);
    expect(user.mercuryAge(user.age)).toEqual(133);
  })
})
