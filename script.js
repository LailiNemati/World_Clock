function updateTime() {
  // Herat
  let heratElement = document.querySelector("#herat");
  if (heratElement) {
    let heratDateElement = heratElement.querySelector(".date");
    let heratTimeElement = heratElement.querySelector(".time");
    let heratTime = moment().tz("Asia/Herat");

    heratDateElement.innerHTML = heratTime.format("MMMM	Do YYYY");
    heratTimeElement.innerHTML = heratTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  // Mashhad
  let mashhadElement = document.querySelector("#mashhad");
  if (mashhadElement) {
    let mashhadDateElement = mashhadElement.querySelector(".date");
    let mashhadTimeElement = mashhadElement.querySelector(".time");
    let mashhadTime = moment().tz("Asia/Mashhad");

    mashhadDateElement.innerHTML = mashhadTime.format("MMMM	Do YYYY");
    mashhadTimeElement.innerHTML = mashhadTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
   let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
