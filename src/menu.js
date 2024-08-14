const content = document.querySelector("#content");
const title = document.createElement("h1");

const soupDiv = document.createElement("div");
const borscht = document.createElement("div");
const chickenNoodle = document.createElement("div");
const tomYum = document.createElement("div");

const mainCourseDiv = document.createElement("div");
const spaghetti = document.createElement("div");
const salmon = document.createElement("div");
const dumplings = document.createElement("div");

const cookieDiv = document.createElement("div");
const chocoChip = document.createElement("div");
const redVelvet = document.createElement("div");
const gingerSnap = document.createElement("div");
export default function showMenuContent() {
  content.innerHTML = "";
  content.appendChild(title);
  title.innerHTML += "Menu";

  content.appendChild(soupDiv);
  soupDiv.innerHTML += "SOUP";
  soupDiv.appendChild(borscht);
  borscht.innerHTML += "Borscht";
  soupDiv.appendChild(chickenNoodle);
  chickenNoodle.innerHTML += "Chicken Noodle";
  soupDiv.appendChild(tomYum);
  tomYum.innerHTML += "Tom Yum";

  content.appendChild(mainCourseDiv);
  mainCourseDiv.innerHTML += "MAINS";
  mainCourseDiv.appendChild(spaghetti);
  spaghetti.innerHTML += "Spaghetti";
  mainCourseDiv.appendChild(salmon);
  salmon.innerHTML += "Salmon";
  mainCourseDiv.appendChild(dumplings);
  dumplings.innerHTML += "dumplings";

  content.appendChild(cookieDiv);
  cookieDiv.innerHTML += "COOKIES";
  cookieDiv.appendChild(chocoChip);
  chocoChip.innerHTML += "Chocolate Chip";
  cookieDiv.appendChild(redVelvet);
  redVelvet.innerHTML += "Red Velvet";
  cookieDiv.appendChild(gingerSnap);
  gingerSnap.innerHTML += "Ginger Snap";
}
