import {UserGroup} from "../src/userGroup.js"
import {User} from "../src/user.js"

describe('UserGroup', () => {
  test('Should fail if user fields are not Frederick, Ernest, 1234 sunshine blvd, 1233456789', () => {
    let newUserGroup = new UserGroup("Co-op1");
    expect(newUserGroup.groupName).toEqual("Co-op1");
    expect(newUserGroup.userIndex).toEqual([])
  });
});
describe('addUser', () => {
  test('Should fail if newUserGroup[0] !=== {firstName: Frederick, lastName: Ernest, address: 1234 sunshine blvd, number: 1233456789' , () => {
    let newUserGroup = new UserGroup("Co-op1");
    let newUser = new User("Frederick", "Ernest", "1234 Sunshine Blvd", "Oregon", "97405", "1233456789", "fake@gmail.com", "linkd", "github");
    newUserGroup.addUser(newUser);
    expect(newUserGroup.groupName).toEqual("Co-op1");
    expect(Object.values(newUserGroup.userIndex[0])).toEqual(["Frederick", "Ernest", "1234 Sunshine Blvd", "Oregon", "97405", "1233456789", "fake@gmail.com", "linkd", "github",])
  });
});
