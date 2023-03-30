// Nav.js

import { NavButton } from '../common/NavButton';
import { Cart } from '../views/Cart';
import { Home } from '../views/Home';
import { RoomList } from '../views/RoomList';
import { TreatmentList } from '../views/TreatmentList';

const navItems = [
  { name: 'home', component: Home },
  { name: 'pokoje', component: RoomList },
  { name: 'zabiegi', component: TreatmentList }
];
const cartButton = NavButton('<i class="fa fa-cart-shopping"></i>', Cart, ['btn', 'btn-cart'], true);


export function Nav() {
  const nav = document.createElement('nav');

  const navButtons = navItems.map(navItem => {
    return NavButton(navItem.name, navItem.component, ['btn']);
  });

  navButtons.push(cartButton);

  nav.append(...navButtons);

  return nav;
}
