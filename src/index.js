
console.log("onload");
console.log("hello jan")


const content = document.querySelector("#content");

const title = document.createElement("h1");
let image = document.createElement("img");
const text = document.createElement("div");

function hello() {
    console.log("helo funct")
    content.appendChild(title);
    title.innerHTML += "Restaurant name";

    image.src="<%=require('./dumps.jpg')%>";
    content.appendChild(image);
    
    content.appendChild(text);
    text.innerHTML += "Food is Delicious. Eat me!";
}

window.onload = function() {
    hello();
    
}


  
