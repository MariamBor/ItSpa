// RoomDetails.js

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
          <div class="room-photo">
          <img src=${room.img} alt="haha">
          <button class="btn add-to-cart">Add to cart</button>
          </div>
          </div>
        `;

        const addToCartButton = details.querySelector('.add-to-cart');
        addToCartButton.addEventListener('click', () => cartManager.addItem(room));

        // usuwamy element mowiacy o ladowaniu
        section.querySelector('.loading').remove();
        // podstawiamy gotowa liste z pokojami
        section.append(details);
    });

  return section;
}
