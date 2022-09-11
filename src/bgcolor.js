const colors = [
  "#87CEFA",
  "#91D8FA",
  "#A5D8FA",
  "#AFDDFA",
  "#B9E2FA",
  "#C3E7FA",
  "#CDECFA",
  "#D7F1FA",
  "#E1F6FA",
  "#EBFBFF",
  "#66CDAA",
  "#70D2B4",
  "#7AD7BE",
  "#84DCC8",
  "#8EE1D2",
  "#98EBDC",
  "#A2F5E6",
  "#9DF0E1",
  "#A7FAEB",
  "#ACFFEF"
];


function colorChange() {
  const chosenColor1 = colors[Math.floor(Math.random() * colors.length)];
  const chosenColor2 = colors[Math.floor(Math.random() * colors.length)];

  const bgColor = document.querySelector(".bg")
  bgColor.style.cssText = `background: linear-gradient( to right, ${chosenColor1}, ${chosenColor2})`;
}

// bg.addEventListener("click", colorChange);

colorChange();
