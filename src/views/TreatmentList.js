// TreatmentsList.js

import { TreatmentDetails } from "./TreatmentDetails";
import { NavButton } from "../common/NavButton";
import { cartManager } from "../cart/cart-manager";

export function TreatmentList() {
  const section = document.createElement("section");
  const ul = document.createElement("ul");

  section.innerHTML = `
    <h2>Lista zabiegów</h2>
    <p>Sprawdź ofertę zabiegów.</p>
    <p class="loading">Ładuję listę zabiegów...</p>
  `;

  // pobieramy liste zabiegów z serwera
  fetch("http://localhost:3000/treatments")
    .then((response) => response.json())
    .then((treatments) => {
      const lis = treatments.map((treatment) => {
        const li = document.createElement("li");

        li.innerHTML = `
            <h4>${treatment.name}</h4>
            <p>
              <strong>${treatment.price.toFixed(2)} PLN</strong>
            </p>
            <footer></footer>
          `;

        const addToCartButton = document.createElement("button");
        addToCartButton.innerText = "Dodaj do koszyka";
        addToCartButton.classList.add("btn");
        addToCartButton.addEventListener("click", () =>
          cartManager.addItem(treatment)
        );

        const detailsButton = NavButton(
          "Dowiedz się więcej...",
          () => TreatmentDetails(treatment.id),
          ["btn"]
        );

        li.querySelector("footer").append(addToCartButton, detailsButton);

        return li;
      });

      ul.append(...lis);

      // usuwamy element mowiacy o ladowaniu
      section.querySelector(".loading").remove();
      // podstawiamy gotowa liste z pokojami
      section.append(ul);
    });

  return section;
}
