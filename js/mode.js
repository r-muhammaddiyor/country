const html = document.documentElement;
const buttons = document.querySelectorAll('.theme-btn');
const toggleBtn = document.getElementById('themeToggle');

function setActiveTheme(theme) {
  buttons.forEach((btn) => {
    btn.classList.remove('btn-primary');
    if (btn.dataset.theme === theme) {
      btn.classList.add('btn-primary');
    }
  });

  toggleBtn.innerHTML = `${theme}`;
}

buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const theme = btn.dataset.theme;
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    setActiveTheme(theme);
  });
});

let elHtml = document.documentElement;
let elDarkBtn = document.querySelector('.dark__mode');
let elLightBtn = document.querySelector('.light__mode');
let savedMode = localStorage.getItem('mode');

elDarkBtn.addEventListener('click', () => {
  elHtml.setAttribute('data-theme', 'dark');
  elDarkBtn.classList.add('hidden');
  elLightBtn.classList.remove('hidden');
  localStorage.setItem('mode', 'dark');
});

elLightBtn.addEventListener('click', () => {
  elHtml.setAttribute('data-theme', 'light');
  elLightBtn.classList.add('hidden');
  elDarkBtn.classList.remove('hidden');
  localStorage.setItem('mode', 'light');
});

if (savedMode === 'dark') {
  elHtml.setAttribute('data-theme', 'dark');
  elDarkBtn.classList.add('hidden');
  elLightBtn.classList.remove('hidden');
} else {
  elHtml.setAttribute('data-theme', 'light');
  elLightBtn.classList.add('hidden');
  elDarkBtn.classList.remove('hidden');
}
