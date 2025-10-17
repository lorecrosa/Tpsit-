const { createApp } = Vue;

createApp({
  data() {
    return {
      username: '',
      messaggioErrore: ''
    };
  },
  watch: {
    username(nuovoValore) {
      if (nuovoValore.length > 0 && nuovoValore.length < 5) {
        this.messaggioErrore = 'Username troppo corto (minimo 5 caratteri)';
      } else {
        this.messaggioErrore = '';
      }
    }
  }
}).mount('#app');
