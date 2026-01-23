import {
  detailCapital,
  detailCurrency,
  detailDomain,
  detailFlag,
  detailLanguage,
  detailName,
  detailNative,
  detailPopulation,
  detailRegion,
  detailSubRegion,
} from './html-elements.js';

const skeleton = document.getElementById('detailsSkeleton');
const content = document.getElementById('detailsContent');
const params = new URLSearchParams(window.location.search);
const countryName = params.get('name');


fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
  .then((res) => res.json())
  .then(([country]) => {
    renderCountry(country);
    skeleton.classList.add('hidden');
    content.classList.remove('hidden');
  });

function renderCountry(country) {
  detailFlag.src = country.flags.svg;
  detailName.textContent = country.name.common;
  detailNative.textContent = Object.values(country.name.nativeName || {})[0]?.common || '—';
  detailPopulation.textContent = country.population.toLocaleString();
  detailRegion.textContent = country.region;
  detailSubRegion.textContent = country.subregion || '—';
  detailCapital.textContent = country.capital?.[0] || '—';
  detailDomain.textContent = country.tld?.[0] || '—';
  detailCurrency.textContent = Object.values(country.currencies || {})[0]?.name || '—';
  detailLanguage.textContent = Object.values(country.languages || {}).join(', ');
}
