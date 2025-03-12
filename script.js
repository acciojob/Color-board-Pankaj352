//your JS code here. If required.
const container = document.querySelector(".container");
const squares = 800;
const colors = ["#FF5733", "#33FF57", "#3357FF", "#F033FF", "#FFC300"];

for (let i = 0; i < squares; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    square.addEventListener("mouseover", () => setColor(square));
    square.addEventListener("mouseout", () => removeColor(square));

    container.appendChild(square);
}

function setColor(element) {
    const color = getRandomColor();
    element.style.backgroundColor = color;
}

function removeColor(element) {
    element.style.backgroundColor = "#111";
}

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}
