import {numPass} from "../src/numPass.js"
describe('numPass', () => { 
  test ('should fail if a user inputs anything but a 9 digit number for number', () => {
    let newNumber = 1234567890;
    let answer = numPass(newNumber);
    expect(answer).toEqual(1234567890);
  });
});