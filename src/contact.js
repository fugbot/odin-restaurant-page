const content = document.querySelector("#content");
const contact = document.createElement("div");
const title = document.createElement("h1");

const contactDiv1 = document.createElement("div");
const contactName1 = document.createElement("div");
const contactJob1 = document.createElement("div");
const contactPhone1 = document.createElement("div");
const contactEmail1 = document.createElement("div");

const contactDiv2 = document.createElement("div");
const contactName2 = document.createElement("div");
const contactJob2 = document.createElement("div");
const contactPhone2 = document.createElement("div");
const contactEmail2 = document.createElement("div");

export default function showContactContent() {
  content.innerHTML = "";
  content.appendChild(contact);
  contact.classList.add("contactContainer");

  contact.appendChild(title);
  title.innerHTML = "Contact Us";

  contact.appendChild(contactDiv1);
  contactDiv1.appendChild(contactName1);
  contactDiv1.classList.add("contact");
  contactName1.innerHTML = "Sir Makes Good Food";
  contactDiv1.appendChild(contactJob1);
  contactJob1.innerHTML = "Chef";
  contactDiv1.appendChild(contactPhone1);
  contactPhone1.innerHTML = "Phone: 123 456 789";
  contactDiv1.appendChild(contactEmail1);
  contactEmail1.innerHTML = "Email: chef.good.food@realemail.com";

  contact.appendChild(contactDiv2);
  contactDiv2.appendChild(contactName2);
  contactDiv2.classList.add("contact");
  contactName2.innerHTML = "Lady Serves Alot";
  contactDiv2.appendChild(contactJob2);
  contactJob2.innerHTML = "Boss Lady";
  contactDiv2.appendChild(contactPhone2);
  contactPhone2.innerHTML = "Phone: 987 654 321";
  contactDiv2.appendChild(contactEmail2);
  contactEmail2.innerHTML = "Email: boss.lady@realemail.com";
}
