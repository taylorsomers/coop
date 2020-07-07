import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";

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
    const linkedIn = $("#linkedIn");

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