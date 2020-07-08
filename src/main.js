import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { User } from './user.js';
import { UserGroup } from './userGroup.js';
import { GroupCollection } from './groupCollection.js';

function getGroupCollection() {
  let groupCollectionString = localStorage.getItem("groupCollection");
  let groupCollection = JSON.parse(groupCollectionString);

  return groupCollection;
}

function storeGroupCollection(groupCollection) {
  let groupCollectionString = JSON.stringify(groupCollection);
  localStorage.setItem("groupCollection", groupCollectionString);
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

    let groupCollection = new GroupCollection();
    let userGroup = new UserGroup();
    let user = new User(firstName, lastName, street, city, state, zip, phone, email, linkedIn, gitHub);
    
    userGroup.addUser(user);
    groupCollection.addGroup(userGroup);
    storeGroupCollection(groupCollection);

    $(".firstName").text(firstName);
    $(".lastName").text(lastName);
    $(".street").text(street);
    $(".city").text(city);
    $(".state").text(state);
    $(".zip").text(zip);
    $(".email").text(email);
    $(".phone").text(phone);
    $(".linkedIn").text(linkedIn);
    $(".agent").text();
    $(".groupName").text();
    $(".regiAddress").text();

    $("#output").show();
  });

  $("#create-group").click(() => {
    let agent = $("#agent").val();
    let groupName = $("#groupName").val();
    let regiAddress = $("#regiAddress").val();
    let groupCollection = getGroupCollection();
    groupCollection.assignName(groupName);
    storeGroupCollection(groupCollection);
  });
});

