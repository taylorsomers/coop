export class GroupCollection {
  constructor() {
    this.groupIndex = [];
    this.currentID = 0;
  }

  addGroup(newGroup){
    
    newGroup.id = this.assignID();
    this.groupIndex.push(newGroup);
  }
  
  assignID() {
    this.currentID += 1;
    return this.currentID;
  }

  assignName(name) {
    this.groupIndex[0].name = name;
  }

  assignAgent(agent) {
    this.groupIndex[0].agent = agent;
  }
}