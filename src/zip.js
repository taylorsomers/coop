export function zipPass(number){
  let allowed = /(\d{5})/gm;
  let number2 = allowed.test(number);
  if (number2 === true){
  console.log(number);
  return number;
  } else {
    console.log("not a number");
    return false;
  }
}