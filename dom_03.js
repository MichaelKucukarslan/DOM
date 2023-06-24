function alertFunction(e){
    alert("Named Function! " + e.blur);
}

const button = document.getElementById("button");
console.log(button);
button.addEventListener('click', alertFunction);