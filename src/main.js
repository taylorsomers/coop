import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { User } from './user.js';
import { UserGroup } from './userGroup.js';

function getGroup(groupID) {
  let groupString = localStorage.getItem("group");
  let group = JSON.parse(groupString);
  if (group.id === groupID){
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

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    $(".btn2").click(function(event) {
      $("#formOne").show(event);
    });
  
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
    storeSessionUser(user);
    let group = new UserGroup(agent, groupName, regiAddress);
    userGroup.addUser(user);
    storeGroup(group);
    
    $(".firstName").text(firstName);
    $(".lastName").text(lastName);
    $(".street").text(street);
    $(".city").text(city);
    $(".state").text(state);
    $(".zip").text(zip);
    $(".email").text(email);
    $(".phone").text(phone);
    $(".linkedIn").text(linkedIn);

    $("#output").show();
  });

  $("#formTwo").submit(function(event) {
    event.preventDefault();
    $(".btn2").click(function(event) {
      $("#formTwo").show(event);
    });
  
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

    const groupID = $("#group-id").val();
    
    let user = new User(firstName, lastName, street, city, state, zip, phone, email, linkedIn, gitHub);
    storeSessionUser(user);

    let myGroup = getGroup(groupID);

    myGroup.addUser(user);
    storeGroup(myGroup);
    
    $(".firstName").text(firstName);
    $(".lastName").text(lastName);
    $(".street").text(street);
    $(".city").text(city);
    $(".state").text(state);
    $(".zip").text(zip);
    $(".email").text(email);
    $(".phone").text(phone);
    $(".linkedIn").text(linkedIn);

    $("#output").show();
  });

});

