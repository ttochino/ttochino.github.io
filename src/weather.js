function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const APIKEY = "f65802d06d36c54e479ff63f0fb28f65"
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${APIKEY}&units=metric`;
  const weather = document.querySelector("#weather span");
  fetch(url)
  const city = document.querySelector("#weather h4");
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      weather.innerText = `${data.main.temp}`;
    });
}

function onGeoError() {
  console.log("Can't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);