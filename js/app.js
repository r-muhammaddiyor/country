import { countriesContainer, teplateCard, infoButton, skeletonContainer, } from './html-elements.js';

export let allCountries = [];

// GET
request();

function request() {
  fetch('https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital')
    .then((res) => res.json())
    .then((res) => {
      allCountries = res;
      skeletonContainer.classList.add('hidden');
      ui(allCountries);
    });
}

export function ui(data) {
  countriesContainer.innerHTML = '';

  data.forEach((el) => {
    const clone = teplateCard.cloneNode(true).content;

    clone.querySelector('#teplateCardFlag').src = el.flags?.svg || '';
    clone.querySelector('#teplateCardName').innerText = el.name?.common || '';
    clone.querySelector('#teplateCardPopulation').innerText = el.population || '';
    clone.querySelector('#teplateCardRegion').innerText = el.region || '';
    clone.querySelector('#teplateCardCapital').innerText = el.capital?.[0] || '';

    const card = clone.querySelector('li');

    card.dataset.id = el.name.common;

    card.addEventListener('click', () => {
      window.location.href = `details.html?name=${encodeURIComponent(card.dataset.id)}`;
    });

    countriesContainer.appendChild(clone);
  });
}
