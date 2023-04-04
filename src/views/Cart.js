// Cart.js

import { cartManager } from '../cart/cart-manager';
import { NavButton } from '../common/NavButton';

export function Cart() {

  const section = document.createElement('section');

  section.innerHTML = `
    <h2>Cart</h2>
    <p>Przeglądaj zawartość koszyka:</p>
    <table class="table">
    <thead>
      <tr>
        <th>Twój wybór</th>
        <th>Ilość dni</th>
        <th>Ilość</th>
        <th>Cena</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
    </tbody>
    <tfoot>
      <tr>
        <td></td>
        <td></td>
        <td>
        Total = <strong>${cartManager.getTotalPrice()}</strong> PLN
        </td>
        <td></td>
      </tr>
    </tfoot>
    </table>
  `;

  const tableBody = section.querySelector('tbody');

  cartManager.getAllItems().forEach(item => {
    const tr = document.createElement('tr');
    // const itemQuantity = cartManager.getItemQuantity(item);

    const removeItem = NavButton('🗑️', () => {
      cartManager.removeItem(item);
      return Cart();
    }, ['btn']);

    tr.innerHTML = `
    <td>${item.name}</td>
    <td>${cartManager.getTotalDays(item) }</td>
    <td>${item.quantity}</td>
    <td>${item.price.toFixed(2)} PLN</td>
    <td></td>
    `;

    tr.lastElementChild.append(removeItem);

    tableBody.appendChild(tr);
  });

  return section;

}


// // Cart.js

// import { cartManager } from '../cart/cart-manager';
// import { NavButton } from '../common/NavButton';

// export function Cart() {

//   const section = document.createElement('section');

//   section.innerHTML = `
//     <h2>Cart</h2>
//     <p>Przeglądaj zawartość koszyka:</p>
//     <table class="table"></table>
//   `;

//   const tableHead = document.createElement('tr');

//   tableHead.innerHTML = `
//     <th>Name</th>
//     <th>Quantity</th>
//     <th>Price</th>
//     <th></th>
//   `;

//   const tableRows = cartManager.getAllItems().map(item => {
//     const tr = document.createElement('tr');

//     const removeItem = NavButton('🗑️', () => {
//       cartManager.removeItem(item);
//       return Cart();
//     }, ['btn']);

//     tr.innerHTML = `
//       <td>${item.name}</td>
//       <td>${item.quantity}</td>
//       <td>${item.price.toFixed(2)} PLN</td>
//       <td></td>
//     `;

//     tr.lastElementChild.append(removeItem);

//     return tr;
//   });

//   const tableFooter = document.createElement('tr');

//   tableFooter.innerHTML = `
//     <td></td>
//     <td></td>
//     <td>
//       Total = <strong>${cartManager.getTotalPrice()}</strong> PLN
//     </td>
//     <td></td>
//   `;

//   // kompletujemy zawartosc tabeli
//   section.querySelector('.table').append(tableHead, ...tableRows, tableFooter);

//   return section;

// }