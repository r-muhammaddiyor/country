import { countriesContainer, teplateCard } from './html-elements.js';

let allCountries = [];

fetch('https://restcountries.com/v3.1/all?fields=name,flags,population,region,capital')
  .then((res) => res.json())
  .then((data) => {
    allCountries = data;
    ui(allCountries);
  });

function ui(list) {
  countriesContainer.innerHTML = '';

  list.forEach((country) => {
    const clone = teplateCard.cloneNode(true).content;

    clone.querySelector('#teplateCardFlag').src = country.flags.svg;
    clone.querySelector('#teplateCardName').innerText = country.name.common;
    clone.querySelector('#teplateCardPopulation').innerText = country.population;
    clone.querySelector('#teplateCardRegion').innerText = country.region;
    clone.querySelector('#teplateCardCapital').innerText = country.capital
      ? country.capital[0]
      : 'No capital';

    countriesContainer.appendChild(clone);
  });
}

export { allCountries, ui };
