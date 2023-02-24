setInterval(function () {
  // madrid
  let madridElement = document.querySelector("#madrid");
  let madridDateElement = madridElement.querySelector(".date");
  let madridTimeElement = madridElement.querySelector(".time");
  let madridTime = moment().tz("Europe/Madrid");

  madridDateElement.innerHTML = madridTime.format("MMMM Do YYYY");
  madridTimeElement.innerHTML = madridTime.format(
    "h:mm:ss [<small>]a[</small>]"
  );

  // london
  let londonElement = document.querySelector("#london");
  let londonDateElement = londonElement.querySelector(".date");
  let londonTimeElement = londonElement.querySelector(".time");
  let londonTime = moment().tz("Europe/London");

  londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
  londonTimeElement.innerHTML = londonTime.format(
    "h:mm:ss [<small>]a[</small>]"
  );

  // costa rica
  let costaRicaElement = document.querySelector("#costaRica");
  let costaRicaDateElement = costaRicaElement.querySelector(".date");
  let costaRicaTimeElement = costaRicaElement.querySelector(".time");
  let costaRicaTime = moment().tz("America/Costa_Rica");

  costaRicaDateElement.innerHTML = costaRicaTime.format("MMMM Do YYYY");
  costaRicaTimeElement.innerHTML = costaRicaTime.format(
    "h:mm:ss [<small>]a[</small>]"
  );
}, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="city">
        <div>
          <h2> ${cityName} </h2>
          <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format(
          "h:mm:ss [<small>]a[</small>]"
        )}</div>
      </div>`;
}

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
