import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { UserGroup } from './userGroup.js';
import { User } from './user.js';

class User {
  constructor(firstName, lastName, street, city, state, zip, phone, email, linkedIn, gitHub) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.street = street;
    this.city = city;//add city property
    this.state = state;
    this.zip = zip;
    this.phone = phone;//change from 'number' to 'phone'
    this.email = email;
    this.linkedIn = linkedIn;//change from 'linkd' to 'linkedIn'
    this.gitHub = gitHub;
  }
  stateCheck() {
    let orBizCenter = "https://bizcenter.org/";
    let secStateOR = "https://sos.oregon.gov/business/Pages/domestic-limited-liability-companies-forms.aspx";
    let aMalan = ["Audry", "Malan", "Cottage Grove, OR", "(307) 717 2559"];
    let orArr = [secStateOR, orBizCenter, aMalan];
    if (this.state === "Oregon") {
      return (orArr);

    } else if (this.state === "Washington") {
      let waProjEq = "https://www.project-equity.org/wp-content/uploads/2019/09/Project-Equity-Washington-State-Small-Business-Closure-Crisis.pdf";
      let secStateWA = "https://www.sos.wa.gov/corps/limitedliabilitycompaniesllconlineandpaperregistrations.aspx";
      let waDevCenter = "https://wsbdc.org/";
      let waArr = [waProjEq, secStateWA, waDevCenter];
      return (waArr);
    }
  }
}

function getGroup(groupID) {
  let groupString = localStorage.getItem("group");
  let group = JSON.parse(groupString);
  if (group.id === groupID) {
    return group;
  } else {
    alert("No Match for Group ID");
  }
}
<<<<<<< HEAD
=======

>>>>>>> beverlypotts
// function getSessionUser() {
//   let sessionUserString = localStorage.getItem("user");
//   let sessionUser = JSON.parse(sessionUserString);
//   return sessionUser;
// }

function storeSessionUser(user) {
  let sessionUserString = JSON.stringify(user);
  localStorage.setItem("user", sessionUserString);
}

function storeGroup(group) {
  let groupString = JSON.stringify(group);
  localStorage.setItem("group", groupString);
}

$(document).ready(function () {
  console.log("hello!");
  $("#form-create").submit(function (event) {
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
<<<<<<< HEAD
    console.log(user);
=======
    console.log("Hey, Look here!");
>>>>>>> 36ee244eb9e998b0e51517a6bb8b733767e2592a
    storeSessionUser(user);
    let group = new UserGroup(agent, groupName, regiAddress);
    group.generateGroupID();
    group.addUser(user);
    storeGroup(group);

    $("#form-create").hide();
    $("#createOutput").html(`<li>"Hello" ${group.id}</li> <li> ${groupName}</li> <li> ${firstName} + ${lastName}</li>`);
    let userOutput = user.stateCheck();
    $("#createOutput").append(userOutput[0]);
    $("#createOutput").append(userOutput[1]);
    $("#createOutput").append(userOutput[2]);

  });

  $("#form-join").submit(function (event) {
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
<<<<<<< HEAD
    console.log(user);
=======
    console.log(user)
    storeSessionUser(user);
>>>>>>> 36ee244eb9e998b0e51517a6bb8b733767e2592a
    let myGroup = getGroup(groupID);
    myGroup.addUser(user);
    storeGroup(myGroup);

    $("#form-join").hide();
    $("#joinOutput").html(`<li> ${myGroup.groupName}</li> <li>${firstName} + ${lastName}</li>`);
    let userOutput = user.stateCheck();
    $("#createOutput").append(userOutput[0]);
    $("#createOutput").append(userOutput[1]);
    $("#createOutput").append(userOutput[2]);

  });

});