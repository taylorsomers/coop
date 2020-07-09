import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { User } from './user.js';
import { UserGroup } from './userGroup.js';

function getGroup(groupID) {
  let groupString = localStorage.getItem("group");
  let group = JSON.parse(groupString);
  if (group.id === groupID) {
    return group;
  } else {
    alert("No Match for Group ID");
  }
}

function getSessionUser() {
  let sessionUserString = localStorage.getItem("user");
  let sessionUser = JSON.parse(sessionUserString);
  return sessionUser;
}

function storeSessionUser(user) {
  let sessionUserString = JSON.stringify(user);
  localStorage.setItem("user", sessionUserString);
}

function storeGroup(group) {
  let groupString = JSON.stringify(group);
  localStorage.setItem("group", groupString);
}
// New User - New Group Creation
$(document).ready(function () {
  $("#create-group").submit(function (event) {
    event.preventDefault();
    const firstName = $("#firstName").val();
    const lastName = $("#lastName").val();
    const street = $("#street").val();
    const city = $("#city").val();
    const state = $("#state").val();
    const zip = parseInt($("#zip").val());
    const email = $("#email").val();
    const phone = parseInt($("#phone").val());
    const linkedIn = $("#linkedIn").val();
    const gitHub = $("#gitHub").val();//add github field input 
    const agent = $("#agent").val();
    const groupName = $("#groupName").val();
    const regiAddress = $("#regiAddress").val();


    let user = new User(firstName, lastName, street, city, state, zip, phone, email, linkedIn, gitHub);
    console.log(user);
    storeSessionUser(user);
    let group = new UserGroup(agent, groupName, regiAddress);
    group.generateGroupID();
    group.addUser(user);
    storeGroup(group);

    $("#create-group").hide();
    $("#createOutput").html(`<li> ${group.id}</li> <li> ${groupName}</li> <li> ${firstName} + ${lastName}</li>`);
    let userOutput = user.stateCheck();
    $("#createOutput").append(userOutput[0]);
    $("#createOutput").append(userOutput[1]);
    $("#createOutput").append(userOutput[2]);
    //output to include location specific information links
    //send yourself pertinent information via email.
  });
});

$(document).ready(function () {
  $("#join-group").submit(function (event) {
    event.preventDefault();

    const firstName = $("#firstName").val();
    const lastName = $("#lastName").val();
    const street = $("#street").val();
    const city = $("#city").val();
    const state = $("#state").val();
    const zip = parseInt($("#zip").val());
    const email = $("#email").val();
    const phone = parseInt($("#phone").val());
    const linkedIn = $("#linkedIn").val();
    const gitHub = $("#gitHub").val();//add github field input 
    const groupID = $("#groupID").val();

    let user = new User(firstName, lastName, street, city, state, zip, phone, email, linkedIn, gitHub);
    console.log(user)
    storeSessionUser(user);
    let myGroup = getGroup(groupID);
    myGroup.addUser(user);
    storeGroup(myGroup);

    $("#join-group").hide();
    $("#joinOutput").html(`<li> ${myGroup.groupName}</li> <li>${firstName} + ${lastName}</li>`);
    let userOutput = user.stateCheck();
    $("#createOutput").append(userOutput[0]);
    $("#createOutput").append(userOutput[1]);
    $("#createOutput").append(userOutput[2]);

    //output to include location specific information links
    //send yourself pertinent information via email.

  });
});