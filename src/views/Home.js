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



// export function Home() {

//   const section = document.createElement('section');
 
  
 
//   const img1 = document.createElement('img');
//   img1.src = require('../assets/1.jpg');
//   img1.classList.add('image');
//   img1.style.position = 'absolute';
//   img1.style.left = '0';
//   img1.style.top = '0';
//   img1.style.zIndex = '4';
//   // img.style.display = 'inline-block'; // Set display property
//   // img.style.width = '25%'; // Set width property
//   //img.style.width = '30vw'; // vw = view width
//   const img2 = document.createElement('img');
//   img2.src = require('../assets/2.jpg');
//   img2.classList.add('image');
//   // img1.style.display = 'inline-block'; // Set display property
//   // img1.style.width = '25%'; // Set width property
//   const img3 = document.createElement('img');
//   img3.src = require('../assets/3.jpg');
//   img3.classList.add('image');
//   // img2.style.display = 'inline-block'; // Set display property
//   // img2.style.width = '25%'; // Set width property
//   const img4 = document.createElement('img');
//   img4.src = require('../assets/4.jpg');
//   img4.classList.add('image');
//   // img3.style.display = 'inline-block'; // Set display property
//   // img3.style.width = '25%'; // Set width property

 

//   section.innerHTML = `
    
//     <h1>Witaj w IT SPA!</h1>
//     <p>Każdy programista lubi u nas odpoczywać.</p>
//   `;

//   section.append(img1);
//   section.append(img2);
//   section.append(img3);
//   section.append(img4);



//   return section;

// }

// export function Home() {
//   const section = document.createElement('section');
//   section.style.position = 'relative';
//   section.style.height = '100vh';
//   section.style.width = '100vw'

//   const topLayer = document.createElement('div');
//   topLayer.style.position = 'relative';
//   topLayer.innerHTML = `
//     <h1>Witaj w IT SPA!</h1> 
//     <h3>Każdy programista lubi u nas odpoczywać.</h3>
//   `;
//   section.appendChild(topLayer);

//   const img1 = document.createElement('img');
//   img1.src = require('../assets/1.jpg');

//   const img2 = document.createElement('img');
//   img2.src = require('../assets/2.jpg');

//   const img3 = document.createElement('img');
//   img3.src = require('../assets/3.jpg');

//   const img4 = document.createElement('img');
//   img4.src = require('../assets/4.jpg');

//   const container = document.createElement('div');
// container.classList.add('image-container');

// const innerContainer = document.createElement('div');
//   innerContainer.classList.add('image-container-inner');
//   innerContainer.appendChild(img1);
//   innerContainer.appendChild(img2);
//   innerContainer.appendChild(img3);
//   innerContainer.appendChild(img4);

//   container.appendChild(innerContainer);

//   section.appendChild(container);

// // container.appendChild(img1);
// // container.appendChild(img2);
// // container.appendChild(img3);
// // container.appendChild(img4);

// // section.appendChild(container);




//   return section;
// }

// function Home() {
//   const section = document.createElement('section');
//   section.style.position = 'relative';
//   section.style.height = '100vh';
//   section.style.width = '100vw'

//   const header = document.createElement('header');
//   header.innerHTML = `
//     <h1>Welcome to my website!</h1> 
//   `;
//   section.appendChild(header);

//   const hero = document.createElement('div');
//   hero.classList.add('hero');
//   const heroImg = document.createElement('img');
//   heroImg.src = require('../assets/hero.jpg');
//   heroImg.alt = 'Hero photo';
//   hero.appendChild(heroImg);
//   section.appendChild(hero);

//   const subpages = document.createElement('div');
//   subpages.classList.add('subpages');

//   const page1 = document.createElement('a');
//   page1.href = '/page1';
//   const page1Img = document.createElement('img');
//   page1Img.src = require('../assets/2.jpg');
//   page1Img.alt = 'Page 1';
//   page1.appendChild(page1Img);
//   subpages.appendChild(page1);

//   const page2 = document.createElement('a');
//   page2.href = '/page2';
//   const page2Img = document.createElement('img');
//   page2Img.src = require('../assets/3.jpg');
//   page2Img.alt = 'Page 2';
//   page2.appendChild(page2Img);
//   subpages.appendChild(page2);

//   const page3 = document.createElement('a');
//   page3.href = '/page3';
//   const page3Img = document.createElement('img');
//   page3Img.src = require('../assets/room4.jpg');
//   page3Img.alt = 'Page 3';
//   page3.appendChild(page3Img);
//   subpages.appendChild(page3);

//   section.appendChild(subpages);

//   return section;
// }

// document.body.appendChild(Home());
