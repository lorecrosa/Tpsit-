const { createApp } = Vue;

createApp({
  data() {
    return {
      messaggio: "Clicca il bottone per cambiare il messaggio"
    };
  },
  methods: {
    cambiaMessaggio() {
      this.messaggio = "Hai cliccato il bottone!";
    }
  }
}).mount('#app');
