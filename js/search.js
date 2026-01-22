// import { allCountries, ui } from './app.js';
// import { search, region } from './html-elements.js';

// function filterCountries() {
//   let searchValue = search.value.toLowerCase();
//   let regionValue = region.value;

//   let result = allCountries.filter((country) => {
//     let name = country.name.common.toLowerCase();
//     let capital = country.capital ? country.capital[0].toLowerCase() : '';
//     let countryRegion = country.region;

//     let searchMatch = name.includes(searchValue) || capital.includes(searchValue);
//     let regionMatch = regionValue === '' || countryRegion === regionValue;

//     return searchMatch && regionMatch;
//   });

//   ui(result);
// }

// search.addEventListener('input', filterCountries);
// region.addEventListener('change', filterCountries);
