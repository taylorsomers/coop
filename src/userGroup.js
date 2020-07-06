export class UserGroup {
  constructor(groupName) {
  this.groupName = groupName;
  this.userIndex = [];
  }
  addUser(newUser){
    this.userIndex.push(newUser)
  }
}
