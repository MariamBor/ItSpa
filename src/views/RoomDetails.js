// RoomDetails.js
import { cartManager } from "../cart/cart-manager";
import datepicker from "js-datepicker";

export function RoomDetails(roomId) {
  const section = document.createElement("section");

  section.innerHTML = `
    <h2>Room</h2>
    <p class="loading">Ładuję pokój...</p>
  `;

  // pobieramy wybrany pokoj z serwera
  fetch(`http://localhost:3000/rooms/${roomId}`)
    .then((response) => response.json())
    .then((room) => {
      const details = document.createElement("article");

      details.innerHTML = `
        <div class="room-description">
          <div id="description">
          <h3>${room.name}</h3>
          <p>Liczba łóżek: ${room.beds}</p>
          <p>Liczba gości: ${room.guests}</p>
          <p>${room.description}</p>
          <p>
            <strong>${room.price.toFixed(2)} PLN</strong>
          </p>
          <div class="room-buttons">
          <div class="date-buttons">
            <input class="btn arrival-date" type="date" placeholder="Wybierz datę przyjazdu">
            <input class="btn departure-date" type="date" placeholder="Wybierz datę wyjazdu">
            </div>
            <button class="btn add-to-cart">Dodaj do koszyka</button>
            </div>
          </div>
          
          </div>
        `;

      const addToCartButton = details.querySelector(".add-to-cart");
      addToCartButton.addEventListener("click", () => {
        const arrivalDateInput = details.querySelector(".arrival-date");
        const departureDateInput = details.querySelector(".departure-date");

        // check if the selected arrival date is after the departure date or before the current date
        const currentDate = new Date().toISOString().split("T")[0];
        if (
          arrivalDateInput.value >= departureDateInput.value ||
          arrivalDateInput.value < currentDate
        ) {
          alert("Please select a valid arrival date.");
          return;
        }

        // check if the selected departure date is more than a year after the arrival date
        const arrivalDate = new Date(arrivalDateInput.value);
        const departureDate = new Date(departureDateInput.value);
        const oneYearFromArrivalDate = new Date(arrivalDate);
        oneYearFromArrivalDate.setFullYear(arrivalDate.getFullYear() + 1);

        if (departureDate > oneYearFromArrivalDate) {
          alert(
            "Please select a departure date within one year from the arrival date."
          );
          return;
        }

        cartManager.addItem({
          ...room,
          arrivalDate: arrivalDateInput.value,
          departureDate: departureDateInput.value,
        });
      });

      window.addEventListener("load", () => {
        const arrivalDateInput = details.querySelector(".arrival-date");
        const departureDateInput = details.querySelector(".departure-date");
        datepicker(arrivalDateInput);
        datepicker(departureDateInput);

        // set the minimum date for the departure date picker to be the selected arrival date
        arrivalDateInput.addEventListener("change", () => {
          const minDepartureDate = new Date(arrivalDateInput.value);
          minDepartureDate.setDate(minDepartureDate.getDate() + 1);
          departureDateInput.min = minDepartureDate.toISOString().split("T")[0];
        });
      });

      // usuwamy element mowiacy o ladowaniu
      section.querySelector(".loading").remove();
      // podstawiamy gotowa liste z pokojami
      section.append(details);
    });

  return section;
}
