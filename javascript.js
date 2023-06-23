const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "Glorious Content";

container.appendChild(content);

const pContent = document.createElement("p");
pContent.textContent = "Hey I'm Red";
pContent.setAttribute("style", "color: red");
container.appendChild(pContent);

const h3Content= document.createElement("h3");
h3Content.textContent = "I'm a blue h3!";
h3Content.setAttribute("style", "color: blue");
container.appendChild(h3Content);

const newDiv = document.createElement("div");
newDiv.setAttribute("style", "border: 2px solid black; background-color: pink; padding: 0px 25px;")

const h1Content = document.createElement("h1");
h1Content.textContent = "I'm in a div";
newDiv.appendChild(h1Content);

const p2Content = document.createElement("p");
p2Content.textContent = "ME TOO!";
newDiv.appendChild(p2Content);

container.appendChild(newDiv);