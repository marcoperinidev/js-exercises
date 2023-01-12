const checkbox = document.getElementById("checkbox");
const submitBtn =   document.querySelector("button[type=submit]");
// console.log(checkbox);
//disabling checkbox
checkbox.disabled = true;
submitBtn.disabled = true;

const elements = document.querySelectorAll(".element");
const selectColor = document.getElementById("selectColor");

// Assign random color to elements
elements.forEach(function(element) {
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.innerHTML=color;
    selectColor.innerHTML = color;
});

// generate random color
function getRandomColor(){
    const letter = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letter[Math.floor(Math.random() * 16)]
    }
    return color;
}