// RoomDetails.js
import { cartManager } from '../cart/cart-manager';
import datepicker from 'js-datepicker';


export function RoomDetails(roomId) {

  const section = document.createElement('section');
  
  section.innerHTML = `
    <h2>Room</h2>
    <p class="loading">Ładuję pokój...</p>
  `;

  // pobieramy wybrany pokoj z serwera
  fetch(`http://localhost:3000/rooms/${roomId}`)
    .then(response => response.json())
    .then(room => {
        const details = document.createElement('article');

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
          </div>
          <div class="room-photo-buttons">
            <div>
            <img src=${room.img} alt="haha">
            </div>
            <div class="room-buttons">
            <input class="btn arrival-date" type="date" placeholder="Wybierz datę przyjazdu">
            <input class="btn departure-date" type="date" placeholder="Wybierz datę wyjazdu">
            <button class="btn add-to-cart">Dodaj do koszyka</button>
            </div>
          </div>
          </div>
        `;

        const addToCartButton = details.querySelector('.add-to-cart');
        addToCartButton.addEventListener('click', () => {
          const arrivalDateInput = details.querySelector('.arrival-date');
          const departureDateInput = details.querySelector('.departure-date');
          cartManager.addItem ({
            ...room,
            arrivalDate: arrivalDateInput.value,
            departureDate: departureDateInput.value,
          });
        });
        
        window.addEventListener('load', () => {
        const arrivalDateInput = details.querySelector('.arrival-date');
        const departureDateInput = details.querySelector('.departure-date');
        datepicker(arrivalDateInput);
        datepicker(departureDateInput);
      });

        // usuwamy element mowiacy o ladowaniu
        section.querySelector('.loading').remove();
        // podstawiamy gotowa liste z pokojami
        section.append(details);
    });

  return section;
}
