// Home.js
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

export function Home() {
  const section = document.createElement('section');
  section.style.position = 'relative';
  section.style.height = '100vh';
  section.style.width = '100vw'

  const topLayer = document.createElement('div');
  topLayer.style.position = 'relative';
  topLayer.innerHTML = `
    <h1>Witaj w IT SPA!</h1> 
    <h3>Każdy programista lubi u nas odpoczywać.</h3>
  `;
  section.appendChild(topLayer);

  const img1 = document.createElement('img');
  img1.src = require('../assets/1.jpg');

  const img2 = document.createElement('img');
  img2.src = require('../assets/2.jpg');

  const img3 = document.createElement('img');
  img3.src = require('../assets/3.jpg');

  const img4 = document.createElement('img');
  img4.src = require('../assets/4.jpg');

  const container = document.createElement('div');
container.classList.add('image-container');

const innerContainer = document.createElement('div');
  innerContainer.classList.add('image-container-inner');
  innerContainer.appendChild(img1);
  innerContainer.appendChild(img2);
  innerContainer.appendChild(img3);
  innerContainer.appendChild(img4);

  container.appendChild(innerContainer);

  section.appendChild(container);

// container.appendChild(img1);
// container.appendChild(img2);
// container.appendChild(img3);
// container.appendChild(img4);

// section.appendChild(container);




  return section;
}

