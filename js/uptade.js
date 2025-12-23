import countries from './data.js';

// elements

let elUi = document.querySelector('.countries');

export function updateUi(arr) {
  elUi.innerHTML = '';

  arr.forEach((item) => {
    let { flag, name, population, ragion, capital } = item;

    elUi.innerHTML += `
      <li class="country">
        <img src="${flag || name}" alt="${name}">
        <div class="country__intro">
          <h4 class="name">${name}</h4>
          <p>Population: <span>${population}</span></p>
          <p>Ragion: <span class="ragion">${ragion}</span></p>
          <p>Capital: <span>${capital}</span></p>
        </div>
      </li>
    `;
  });
}

updateUi(countries);
