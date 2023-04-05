// TreatmentsDetails.js

export function TreatmentDetails(treatmentId) {

    const section = document.createElement('section');
    
    section.innerHTML = `
      <h2>Treatment</h2>
      <p class="loading">Ładuję zabieg...</p>
    `;
  
    // pobieramy wybrany pokoj z serwera
    fetch(`http://localhost:3000/treatments/${treatmentId}`)
      .then(response => response.json())
      .then(treatment => {
          const details = document.createElement('article');
  
          details.innerHTML = `
          <div class="treatment-description">
            <h3>${treatment.name}</h3>
            <p>Obszar: ${treatment.area}</p>
            <p>Czas trwania: ${treatment.time}</p>
            <p>
              <strong>${treatment.price.toFixed(2)} PLN</strong>
            </p>
            <button class="btn add-to-cart">Dodaj do koszyka</button>
          </div>
          `;
  
          // usuwamy element mowiacy o ladowaniu
          section.querySelector('.loading').remove();
          // podstawiamy gotowa liste z pokojami
          section.append(details);
      });
  
    return section;
  }
  