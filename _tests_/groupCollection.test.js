import { GroupCollection } from '../src/groupCollection.js';

describe('GroupCollection', () => {
  test('Should create a GroupCollection object', () => {
    let groupCollection = new GroupCollection();
    expect(groupCollection.groupIndex).toEqual([]);
  });
});