// JavaScript Document
var body = document.querySelector("body");
var uitvouwen = document.querySelector("header nav ul li img:first-of-type");
var invouwen = document.querySelector(".navigation-hidden img");

var navigation = document.querySelector(".navigation-hidden");

uitvouwen.addEventListener("click", vouwuit);
invouwen.addEventListener("click", vouwin);

function vouwuit() {
  navigation.classList.add("shownavigation");
  body.classList.add("overflow");
}

function vouwin() {
  navigation.classList.remove("shownavigation");
  body.classList.remove("overflow");
}
