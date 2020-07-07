export function numPass(number){
  let allowed = /(\d{3})[ -]?(\d{3})[ -]?(\d{4})/gm;
  let number2 = allowed.test(number);
  if (number2 === true){
  console.log(number);
  return number;
  } else {
    console.log("not a number");
    return false;
  }
}