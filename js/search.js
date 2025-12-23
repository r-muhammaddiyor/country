import countries from './data.js';
import { updateUi } from './uptade.js';

let elInput = document.querySelector('.input');
let elSelect = document.querySelector('#region');

elInput.addEventListener('input', (e) => {
  let inputValue = e.target.value.trim();
  let filterArr = countries.filter((item) => {
    return item.name.toLowerCase().includes(inputValue.toLowerCase());
  });

  updateUi(filterArr);
});

elSelect.addEventListener('change', (e) => {
  let res = e.target.value;
  let filterArr = countries.filter((item) => item.region.toLowerCase() == res.toLowerCase());

  updateUi(filterArr)
});
