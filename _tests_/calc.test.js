import { User } from "./../src/calc.js";

describe('user', () => {

  test('users age on mercury', () => {
    let user = new User('mike', 32, 70);
    expect(user.planetAge(user.age, user.aging.mercury)).toEqual(133);
  })

  test('users age on venus', () => {
    let user = new User('mike', 32);
    expect(user.planetAge(user.age, user.aging.venus)).toEqual(51);
  })
  test('users age on mars', () => {
    let user = new User('mike', 32);
    expect(user.planetAge(user.age, user.aging.mars)).toEqual(17);
  })
  test('users age on jupiter', () => {
    let user = new User('mike', 32);
    expect(user.planetAge(user.age, user.aging.jupiter)).toEqual(2);
  })
test('uesrs years left to live', () => {
  let user = new User('mike', 32, 70);
  expect(user.yearsLeft(70,32)).toEqual(38);
})

})
