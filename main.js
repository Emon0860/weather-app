const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiKey = "58eb31a8c6a352c8637fb83fd51d5cfc";
const searchBox = document.querySelector(".search input");
const search = document.querySelector(".search-icon");

searchBox.addEventListener("click", () => {
  searchBox.value = "";
  searchBox.style.color = "black";
});

async function getWeather() {
  let response = await fetch(url + `${searchBox.value}&appid=${apiKey}`);
  let data = await response.json();

if(data.cod === "404") {
    searchBox.style.color = "red";
    searchBox.value = "City not found";
  } else {
    document.querySelector("#city").innerText = data.name;
    document.querySelector("#temp").innerText = Math.round(data.main.temp) + "°C";
    document.querySelector("#humadity").innerText = data.main.humidity + "%";
    document.querySelector("#wind").innerText = data.wind.speed + "m/s";
  
    let whether = document.querySelector(".whether-img");
    if (data.weather[0].main === "Snow") {
      whether.src = "imges/snow.png";
    } else if (data.weather[0].main === "Rain") {
      whether.src = "imges/rain.png";
    } else if (data.weather[0].main === "clouds") {
      whether.src = "imges/clouds.png";
    } else if (data.weather[0].main === "Clear") {
      whether.src = "imges/clear.png";
    } else if (data.weather[0].main === "Thunderstorm") {
      whether.src = "imges/clouds.png";
    } else if (data.weather[0].main === "Drizzle") {
      whether.src = "imges/drizzle.png";
    } else if (data.weather[0].main === "Mist") {
      whether.src = "imges/mist.png";
    }

    document.querySelector(".hide").classList.remove("hide");
  }
}

search.addEventListener("click", () => {
  getWeather();
});

searchBox.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    getWeather();
  }
});