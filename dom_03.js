function alertFunction(){
    alert("Named Function!");
}

const button = document.getElementById("button");
console.log(button);
button.addEventListener('click', alertFunction);