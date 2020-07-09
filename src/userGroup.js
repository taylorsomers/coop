// Edited

export class UserGroup {

  constructor(agent, groupName, regiAddress) {
    this.agent = agent;
    this.groupName = groupName;
    this.regiAddress = regiAddress;
    this.userIndex = [];
    generateGroupID();
  }

  generateGroupID() {
    let id = [];
    for (let i = 0; i < 5; i ++) {
      let digit = Math.floor((Math.random() * 10) + 0);
      id.push(digit);
    }
    this.id = id;
  }

  addUser(newUser){
    this.userIndex.push(newUser);
  }
}