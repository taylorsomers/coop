export class generateGroupID {

  generateGroupID() {
    let id = [];
    for (let i = 0; i < 5; i ++) {
      let digit = Math.floor((Math.random() * 10) + 0);
      id.push(digit);
    }
  }

}