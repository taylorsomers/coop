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
});