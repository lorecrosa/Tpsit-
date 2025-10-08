const { createApp } = Vue;

createApp({
  data() {
    return {
      nome: '',
      genere: '',
      paese: ''
    };
  }
}).mount('#app');
