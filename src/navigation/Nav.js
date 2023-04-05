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
  cartStatus.innerHTML = `Stan Twojego koszyka: ${cartManager.getTotalPrice()} PLN`;
  
  cartStatus.classList.add('cart-status');
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

  const navButtons = navItems.map(navItem => {
    return NavButton(navItem.name, navItem.component, ['btn']);
  });

  navButtons.push(cartButton);

  nav.append(...navButtons);

  return nav;
}
