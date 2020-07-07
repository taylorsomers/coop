//take an object and store it in localStorage object

//1. userGroup is the object
//2.turn object into string with JSON (stringify) so I can store it
//3. store in localStorage (.setItem)
//4.retrieve object
storeGroup() {
  let userGroupString = JSON.stringify(userGroup);
  localStorage.setItem("group", userGroupString);
  }
  
  function getGroup() {
    let userGroupString = localStorage.getItem("group");
    let userGroupObject = JSON.parse(userGroupString);
  
    return userGroupObject;
  }