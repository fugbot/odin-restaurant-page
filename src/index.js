import dumpsIcon from './dumps.jpg';

const content = document.querySelector("#content");

const title = document.createElement("h1");
const text = document.createElement("div");

function initialPage() {
    console.log("helo funct")
    content.appendChild(title);
    title.innerHTML += "Restaurant name";

    const picture = new Image();
    picture.src = dumpsIcon;
    content.appendChild(picture);
    
    content.appendChild(text);
    text.innerHTML += "Food is Delicious. Eat me!";
}

window.onload = function() {
    initialPage();   
}

