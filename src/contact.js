// export default function contactContent() {
//     console.log('I get called from contact.js!');
// }

const content = document.querySelector("#content");

const title = document.createElement("h1");
const text = document.createElement("div");

export default function showContactContent() {
  content.appendChild(title);
  title.innerHTML += "Contact Us";

  content.appendChild(text);
  text.innerHTML += "Chef";
}