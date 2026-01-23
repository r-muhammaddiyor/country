import { allCountries, ui } from './app.js';
import { search, region, searchNull } from './html-elements.js';

search.addEventListener('input', () => {
  let value = search.value.toLowerCase();

  let result = allCountries.filter((country) => {
    let name = country.name?.common?.toLowerCase() || '';
    let capital = country.capital?.[0]?.toLowerCase() || '';

    return name.includes(value) || capital.includes(value);
  });

  if (result.length === 0) {
    searchNull.classList.remove('hidden');
    ui([]);
  } else {
    searchNull.classList.add('hidden');
    ui(result);
  }
});

region.addEventListener('change', () => {
  let regionValue = region.value;

  let result = allCountries.filter((country) => {
    return country.region === regionValue;
  });

  if (result.length === 0) {
    searchNull.classList.remove('hidden');
    ui([]);
  } else {
    searchNull.classList.add('hidden');
    ui(result);
  }
});
