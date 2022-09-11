const images = ["01.jpg", "02.jpg", "03.jpg"]

const imgBox = document.querySelector(".imgBox")
const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `src/img/${chosenImage}`;
imgBox.appendChild(bgImage);