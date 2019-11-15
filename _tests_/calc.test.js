import { User } from "./../calc.js";

describe('user', () => {

  test('users age on mercury', () => {
    expect(user.mercuryAge().equalTo(user.age * (1/.24)))
  })
})
