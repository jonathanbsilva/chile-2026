const ACCESS_KEY = 'chile-2026-access';
const CHECKLIST_KEY = 'chile-2026-checklist';
const PASSWORD = 'chile2026'; // ponytail: visual gate only; real privacy needs private hosting/auth.

const access = document.querySelector('#access');
const app = document.querySelector('#app');
const form = document.querySelector('#access-form');
const password = document.querySelector('#access-password');
const error = document.querySelector('#access-error');

function unlock() {
  access.hidden = true;
  app.hidden = false;
  password.value = '';
  updateCountdown();
}

const linkPassword = new URLSearchParams(window.location.search).get('senha');
if (linkPassword === PASSWORD) {
  localStorage.setItem(ACCESS_KEY, 'yes');
  history.replaceState(null, '', `${window.location.pathname}${window.location.hash}`);
  unlock();
} else if (localStorage.getItem(ACCESS_KEY) === 'yes') {
  unlock();
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (password.value === PASSWORD) {
    localStorage.setItem(ACCESS_KEY, 'yes');
    error.hidden = true;
    unlock();
  } else {
    error.hidden = false;
    password.focus();
  }
});

function updateCountdown() {
  const target = new Date('2026-08-08T14:55:00-03:00');
  const remaining = target - new Date();
  const output = document.querySelector('#countdown');
  if (remaining <= 0) {
    output.textContent = 'A viagem já começou.';
    return;
  }
  const days = Math.floor(remaining / 86400000);
  const hours = Math.floor((remaining % 86400000) / 3600000);
  output.textContent = `Faltam ${days} dias e ${hours} horas para decolar.`;
}

const saved = JSON.parse(localStorage.getItem(CHECKLIST_KEY) || '{}');
document.querySelectorAll('[data-checklist-item]').forEach((item) => {
  item.checked = Boolean(saved[item.dataset.checklistItem]);
  item.addEventListener('change', () => {
    saved[item.dataset.checklistItem] = item.checked;
    localStorage.setItem(CHECKLIST_KEY, JSON.stringify(saved));
  });
});
