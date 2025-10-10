const boxesPalette = document.querySelectorAll(".box-palette");

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let hashtagColor = "#";
  for (let i = 0; i < 6; i++) {
    hashtagColor += letters[Math.floor(Math.random() * 16)];
  }
  return hashtagColor;
};

boxesPalette.forEach((boxPalette) => {
  boxPalette.addEventListener("click", () => {
    const newColor = getRandomColor();
    boxPalette.style.backgroundColor = newColor;
    const colorCodeElement = boxPalette.querySelector(".color-name");
    colorCodeElement.textContent = newColor;
  });
});
