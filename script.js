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

  // Riyadh
  let riyadhElement = document.querySelector("#riyadh");
  if (riyadhElement) {
    let riyadhDateElement = riyadhElement.querySelector(".date");
    let riyadhTimeElement = riyadhElement.querySelector(".time");
    let riyadhTime = moment().tz("Asia/Riyadh");

   riyadhDateElement.innerHTML = riyadhTime.format("MMMM	Do YYYY");
   riyadhTimeElement.innerHTML = riyadhTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  
// Moscow
  let moscowElement = document.querySelector("#moscow");
  if (moscowElement) {
    let moscowDateElement = moscowElement.querySelector(".date");
    let moscowTimeElement = moscowElement.querySelector(".time");
    let moscowTime = moment().tz("Asia/Moscow");

   moscowDateElement.innerHTML = moscowTime.format("MMMM	Do YYYY");
   moscowTimeElement.innerHTML = moscowTime.format(
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
  <a href="/">All cities</a>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
