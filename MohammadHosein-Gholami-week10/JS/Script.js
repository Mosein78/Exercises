const shadow = document.querySelector(".shadow");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const circles = document.querySelectorAll(".circle");

let firstNumber = 1;

const save = localStorage.getItem("progress");

if (save) {
  firstNumber = parseInt(save);
}

const update = () => {
  circles.forEach((circle, idx) => {
    if (idx < firstNumber) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
  const active = document.querySelectorAll(".active");
  shadow.style.width = ((active.length - 1) / (circles.length - 1)) * 100 + "%";

  if (firstNumber === 1) {
    prev.disabled = true;
  } else {
    prev.disabled = false;
  }

  if (firstNumber === circles.length) {
    next.disabled = true;
  } else {
    next.disabled = false;
  }

  localStorage.setItem("progress", firstNumber);
};
update();

const nextHandler = () => {
  firstNumber++;
  if (firstNumber > circles.length) {
    firstNumber = circles.length;
  }
  update();
};

const pervHandler = () => {
  firstNumber--;
  if (firstNumber < 1) {
    firstNumber = 1;
  }
  update();
};

next.addEventListener("click", nextHandler);
prev.addEventListener("click", pervHandler);
