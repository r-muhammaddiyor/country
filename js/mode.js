let elBody = document.querySelector('.body');
let elDarkBtn = document.querySelector('.dark__mode');
let elLightBtn = document.querySelector('.light__mode');
let saveMode = localStorage.getItem('mode');
let savedMode = localStorage.getItem('mode');

elDarkBtn.addEventListener('click', () => {
  elBody.classList.add('dark-mode');
  elDarkBtn.classList.add('hidden');
  elLightBtn.classList.remove('hidden');
  localStorage.setItem('mode', 'dark');
});

elLightBtn.addEventListener('click', () => {
  elBody.classList.remove('dark-mode');
  elLightBtn.classList.add('hidden');
  elDarkBtn.classList.remove('hidden');
  localStorage.setItem('mode', 'light');
});

if (savedMode === 'dark') {
  elBody.classList.add('dark-mode');
  elDarkBtn.classList.add('hidden');
  elLightBtn.classList.remove('hidden');
} else {
  elBody.classList.remove('dark-mode');
  elLightBtn.classList.add('hidden');
  elDarkBtn.classList.remove('hidden');
}
