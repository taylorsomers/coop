import {User} from "../src/user.js"

describe('User', () => {
  test('Should fail if user fields are not Frederick, Ernest, 1234 sunshine blvd, 1233456789', () => {
    let newUser = new User("Frederick", "Ernest", "1234 Sunshine Blvd", "1233456789");
    expect(newUser.firstName).toEqual("Frederick");
    expect(newUser.lastName).toEqual("Ernest");
    expect(newUser.address).toEqual("1234 Sunshine Blvd");
    expect(newUser.number).toEqual("1233456789");
  });
});