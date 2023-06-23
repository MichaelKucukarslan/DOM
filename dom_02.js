const jsButton = document.querySelector("#btn");
jsButton.onclick = () => alert("JS click event");

const eventListenerButton = document.querySelector("#button");
eventListenerButton.addEventListener("click", () => {alert("addEventListener");});