// Nav.js

import { NavButton } from '../common/NavButton';
import { Cart } from '../views/Cart';
import { Home } from '../views/Home';
import { RoomList } from '../views/RoomList';
import { TreatmentList } from '../views/TreatmentList';
import { cartManager } from '../cart/cart-manager';

const navItems = [
  { name: 'home', component: Home },
  { name: 'pokoje', component: RoomList },
  { name: 'zabiegi', component: TreatmentList }
];



const cartButton = NavButton('<i class="fa fa-cart-shopping"></i>', Cart, ['btn', 'btn-cart'], true);

cartButton.addEventListener('mouseenter', () => {
  const cartStatus = document.createElement('div');
  cartStatus.classList.add('cart-status');

  const cartItems = cartManager.getAllItems();

  if (cartItems.length > 0) {
    const itemsList = document.createElement('ul');

    for (const item of cartItems) {
      const listItem = document.createElement('li');
      listItem.textContent = `${item.quantity} x ${item.name} - ${item.price.toFixed(2)} PLN`;
      itemsList.appendChild(listItem);
    }

    cartStatus.appendChild(itemsList);
  } else {
    const emptyMessage = document.createElement('p');
    emptyMessage.textContent = 'Twój koszyk jest pusty.';
    cartStatus.appendChild(emptyMessage);
  }

  const totalPrice = document.createElement('p');
  totalPrice.textContent = `Total = ${cartManager.getTotalPrice()} PLN`;
  cartStatus.appendChild(totalPrice);

  cartButton.appendChild(cartStatus);
});

cartButton.addEventListener('mouseleave', () => {
  const cartStatus = cartButton.querySelector('.cart-status');
  if (cartStatus) {
    cartStatus.remove();
  }
});



export function Nav() {
  const nav = document.createElement('nav');

  const menu = document.createElement('div');
  menu.classList.add('menu');

  const navButtons = navItems.map(navItem => {
    return NavButton(navItem.name, navItem.component, ['btn']);
  });

  const cartButtonElement = cartButton;
  cartButtonElement.classList.add('btn-cart');

  const hamburger = document.createElement('i');
  hamburger.classList.add('hamburger', 'fas', 'fa-bars');


  const toggleNav = () => {
    menu.classList.toggle('active');
    hamburger.classList.toggle('active');
  };

  hamburger.addEventListener('click', toggleNav);

  const resizeHandler = () => {
    if (window.innerWidth > 768) {
      nav.classList.remove('active');
      hamburger.classList.remove('active');
    } else {
      if(!menu.classList.contains('active')) {
      hamburger.classList.add('active');
      }
    }
  };

  window.addEventListener('resize', resizeHandler);

  nav.appendChild(hamburger);
  navButtons.forEach(button => menu.appendChild(button));
  nav.appendChild(menu);
  nav.appendChild(cartButtonElement);
  

  return nav;
}
