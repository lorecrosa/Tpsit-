const { createApp } = Vue;

createApp({
  components: {
    'saluto-utente': {
      template: `<div class="saluto">Benvenuto nella nostra applicazione!</div>`
    }
  }
}).mount('#app');
