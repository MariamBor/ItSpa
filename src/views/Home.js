// Home.js

export function Home() {

  const section = document.createElement('section');

  const heroContainer = document.createElement('div');
  heroContainer.className = 'hero-container';

  const heroPhoto = document.createElement('img');
  heroPhoto.src = require('../assets/hero.jpg');
  heroPhoto.alt = 'Hero';
  heroPhoto.className = 'hero-photo';

  const heroHeader = document.createElement('h1');
  heroHeader.className = 'hero-header';
  heroHeader.textContent = 'Witaj w naszym SPA dla programistów!';

  const homeText = document.createElement('p');
  homeText.className = 'home-text';
  homeText.textContent = 'Czy czujesz się wyczerpany i znużony po całym dniu spędzonym przed komputerem? W takim razie nasze SPA jest idealnym miejscem dla Ciebie! Oferujemy szeroki wybór pokojów i zabiegów, które pomogą Ci zrelaksować się i odzyskać siły.';

  const photoContainer = document.createElement('div');
  photoContainer.className = 'photo-container';

  const photo1 = document.createElement('img');
  photo1.src = require('../assets/2.jpg');
  photo1.alt = 'photo1';
  photo1.className = 'photos';

  const photo2 = document.createElement('img');
  photo2.src = require('../assets/room2.jpg');
  photo2.alt = 'photo2';
  photo2.className = 'photos';

  const photo3 = document.createElement('img');
  photo3.src = require('../assets/4.jpg');
  photo3.alt = 'photo3';
  photo3.className = 'photos';



  heroContainer.appendChild(heroPhoto);
  heroContainer.appendChild(heroHeader);
  photoContainer.appendChild(photo1);
  photoContainer.appendChild(photo2);
  photoContainer.appendChild(photo3);
  
  section.appendChild(heroContainer);
  section.appendChild(homeText);
  section.appendChild(photoContainer);

  return section;
}