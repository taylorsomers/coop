import { GroupCollection } from '../src/groupCollection.js';
import { UserGroup } from '../src/userGroup.js';
describe('GroupCollection', () => {
  let groupCollection;
  beforeEach (() => {
    groupCollection = new GroupCollection();
  });

  test('Should create a GroupCollection object', () => {
    expect(groupCollection.groupIndex).toEqual([]);
  });

  test('Should add a group to GroupCollection object', () => {
    
    let myGroup = new UserGroup();
    groupCollection.addGroup(myGroup);
    expect(groupCollection.groupIndex[0]).toEqual(myGroup);
  });

  test('Should assign an ID to each new UserGroup object', () => {
    let myGroup = new UserGroup();
    groupCollection.addGroup(myGroup);
    expect(groupCollection.currentID).toBe(1);
    let newGroup = new UserGroup();
    groupCollection.addGroup(newGroup);
    expect(groupCollection.currentID).toBe(2);
    expect(groupCollection.groupIndex[1].id).toBe(2);
  });

  test('Should assign a name to a UserGroup object', () => {
    let myGroup = new UserGroup();
    groupCollection.addGroup(myGroup);
    groupCollection.assignName("Group 1");
    expect (groupCollection.groupIndex[0].name).toBe("Group 1");
  });
});