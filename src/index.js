import dumpsIcon from "./dumps.jpg";
import showContact from "./contact.js";
import showMenu from "./menu.js";
import "./style.css";

const content = document.querySelector("#content");
const btns = document.querySelectorAll("button");


//home content
const title = document.createElement("h1");
const text = document.createElement("div");
const picture = new Image();
picture.src = dumpsIcon;


const home = document.createElement("div");
content.appendChild(home);
home.appendChild(title);
title.innerHTML = "Home";
home.appendChild(picture);
home.appendChild(text);
text.innerHTML = "Food is Delicious. Eat me!";

function showHome() {
  const childOfContent = content.childNodes[0];
  content.replaceChild(home, childOfContent);
}

// window.onload = function() {
//     showHome();
// }

function displayPage() {
  showHome();
  const nav = document.querySelector("nav");


  const contactBtn = document.querySelector("#contact");
  contactBtn.addEventListener("click", () => {
    showContact();
  });

  const menuBtn = document.querySelector("#menu");
  menuBtn.addEventListener("click", () => {
    showMenu();
  });

  const homeBtn = document.querySelector("#home");
  homeBtn.addEventListener("click", () => {
    showHome();
  });

  /* function emptyContent() {
    content.innerHTML = "";
    console.log("emptied content");
  }
  function empty(elem) {
    while (elem.firstChild) {
      //elem.removeChild(elem.lastChild);
      elem.replaceChildren();
      console.log("emptied");
    }
  }

  function handleClick(e) {
    console.log("handle click ");
    if (e.target.matches("button")) {
      console.log("active");
      btns.forEach((btn) => btn.classList.remove("active"));
      e.target.classList.add("active");
      console.log("not active now");
    }
  } */
}

displayPage();
