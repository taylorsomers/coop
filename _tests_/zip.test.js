import {zipPass} from "../src/zip.js"
describe('numPass', () => { 
  test ('should fail if a user inputs anything but a 9 digit number for number', () => {
    let newNumber = 12345;
    let answer = zipPass(newNumber);
    expect(answer).toEqual(12345);
  });
});