import dumpsIcon from './dumps.jpg';
import contactContent from './contact.js'
import showContact from './contact.js'


const content = document.querySelector("#content");

const title = document.createElement("h1");
const text = document.createElement("div");

const btns = document.querySelectorAll("button");

function showHome() {
    content.appendChild(title);
    title.innerHTML += "Restaurant name";

    const picture = new Image();
    picture.src = dumpsIcon;
    content.appendChild(picture);
    
    content.appendChild(text);
    text.innerHTML += "Food is Delicious. Eat me!";
}

// window.onload = function() {
//     showHome();   
// }

function displayPage(){
    showHome();
    const nav = document.querySelector("nav");
    nav.addEventListener('click', (event) => {
        if(event.target.tagName === "BUTTON"){
            console.log(event.target.innerHTML);
        }
    })
    
    const contactBtn = document.querySelector("#contact");
    contactBtn.addEventListener("click", (e) => {
        //contactBtn.onclick = contactContent();

        empty(content);
        handleClick(e);
        contactBtn.onclick = showContact();
        console.log("clicked");
    
    })
    function empty(elem){
        while(elem.firstChild){
            //elem.removeChild(elem.lastChild);
            elem.replaceChildren();
            console.log('emptied')
        }
    }

    function handleClick(e){
        console.log("handle click ")
        if(e.target.matches("button")){
            console.log("active")
            btns.forEach(btn => btn.classList.remove('active'));
            e.target.classList.add("active");
            console.log("not active now")
        }
    }
}

displayPage();







