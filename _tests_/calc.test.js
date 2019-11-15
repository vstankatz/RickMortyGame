import { User } from "./../src/calc.js";

describe('user', () => {

  test('users age on mercury', () => {
    let user = new User('mike', 32);
    expect(user.mercuryAge(user.age)).toEqual(133);
  })

  test('users age on venus', () => {
    let user = new User('mike', 32);
    expect(user.venusAge(user.age)).toEqual(51);
  })
  test('users age on mars', () => {
    let user = new User('mike', 32);
    expect(user.marsAge(user.age)).toEqual(17);
  })
  test('users age on jupiter', () => {
    let user = new User('mike', 32);
    expect(user.jupiterAge(user.age)).toEqual(2);
  })
test('uesrs years left to live', () => {
  let user = new User('mike', 32, 70);
  expect(user.yearsLeft(user.venusAge(user.age),user.venusAge(user.death)).toEqual(61);
})

})
