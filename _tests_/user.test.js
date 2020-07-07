import {User, numPass} from "../src/user.js"

describe('User', () => {
  test('Should fail if user fields are not ["Frederick", "Ernest", "1234 Sunshine Blvd", "Oregon", "1233456789", "fake@gmail.com", "linkd", "gitHub"]', () => {
    let newUser = new User("Frederick", "Ernest", "1234 Sunshine Blvd", "Oregon", "1233456789", "fake@gmail.com", "linkd", "gitHub");
    expect(newUser.firstName).toEqual("Frederick");
    expect(newUser.lastName).toEqual("Ernest");
    expect(newUser.street).toEqual("1234 Sunshine Blvd");
    expect(newUser.state).toEqual("Oregon");
    expect(newUser.number).toEqual("1233456789");
    expect(newUser.email).toEqual("fake@gmail.com");
    expect(newUser.linkd).toEqual("linkd");
    expect(newUser.gitHub).toEqual("gitHub");
  });
});

