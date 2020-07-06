import {UserGroup} from "../src/userGroup.js"

describe('UserGroup', () => {
  test('Should fail if user fields are not Frederick, Ernest, 1234 sunshine blvd, 1233456789', () => {
    let newUserGroup = new UserGroup("Co-op1");
    expect(newUserGroup.groupName).toEqual("Co-op1");
    expect(newUserGroup.userIndex).toEqual([])
  });
});