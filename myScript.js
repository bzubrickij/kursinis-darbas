"use strict";
// ---------------------------------------------------------------------------------MENU
let burger = document.getElementById("burger");
let buttons = document.getElementsByClassName("myButton");
let menu = document.getElementById("menu");

burger.addEventListener("click", function () {
  for (let x of buttons) {
    x.classList.toggle("show");
    console.log("ok1");
  }
  menu.classList.toggle("relative");
  console.log("ok2");
});

// ---------------------------------------------------------------------------------MENU Scroll

function myFunction1() {
  let one = document.getElementById("top");
  one.scrollIntoView({ behavior: "smooth" });
  console.log("ok");
}
function myFunction2() {
  let one2 = document.getElementById("TABS");
  one2.scrollIntoView({ behavior: "smooth" });
  console.log("ok2");
}
function myFunction3() {
  let one3 = document.getElementById("PRICING");
  one3.scrollIntoView({ behavior: "smooth" });
  console.log("ok3");
}
function myFunction4() {
  let one4 = document.getElementById("SWIPER");
  one4.scrollIntoView({ behavior: "smooth" });
  console.log("ok4");
}
function myFunction5() {
  let one5 = document.getElementById("CONTACT");
  one5.scrollIntoView({ behavior: "smooth" });
  console.log("ok5");
}
//------------------------------------------------------------------------------------- Radio validation

function check() {
  var radios = document.getElementsByName("choice");

  for (var i = 0, len = radios.length; i < len; i++) {
    if (radios[i].checked) {
      return true;
    }
  }

  return false;
}

// --------------------------------------------------------------------------------------- Tabs

function change(index) {
  let div = document.querySelectorAll(".item2");
  let allButtons = document.querySelectorAll("#button");

  for (let i = 0; i < div.length; i++) {
    div[i].classList.add("hide");
    allButtons[i].classList.remove("active");
  }

  let element1 = document.querySelectorAll(".item2")[index];
  element1.classList.remove("hide");
  allButtons[index].classList.add("active");
}
