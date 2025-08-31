import './assets/css/style.scss';
import { handleDownload, handleFormSubmit } from './assets/modules/submitForms.js';
import { navigate } from './assets/modules/sections.js';
import { iniciarContador } from './assets/modules/contador.js';

document.addEventListener('DOMContentLoaded', () => {
  navigate('Presence');

  handleFormSubmit();
  handleDownload();

  document.querySelectorAll('button[data-target]').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-target');
      navigate(target);
    });
  });

  iniciarContador();
});
