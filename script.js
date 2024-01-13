let innerShape = document.querySelector(".inner-shape");
let outerShape = document.getElementById("shape-container");
let buttonEls = document.querySelectorAll("BUTTON");
let shapes = ["inner-shape", "triangle", "hexagon", "circle", "parallel"];
let color = ["red", "blue", "blueviolet", "brown", "burlywood", "purple"];
let index = 0;
let shapeIndex = 0;
let isTriangle = false;
let isCircle = false;

function changeColor() {
  let currentColor = color[index++];
  if (index == color.length) {
    index = 0;
  }
  outerShape.style.backgroundColor = currentColor;

  buttonEls.forEach((button) => {
    button.style.backgroundColor = currentColor;
  });
}

function changeShape() {
  innerShape.className = shapes[shapeIndex];
  shapeIndex = (shapeIndex + 1) % shapes.length;
}

function changeOuterShape() {
  if (isCircle) {
    outerShape.style.borderRadius = "0%";
  } else {
    outerShape.style.borderRadius = "50%";
  }
  isCircle = !isCircle;
}

changeOuterShape();
