const { createApp } = Vue;

createApp({
  data() {
    return {
      carrello: [
        { nome: "Maglietta", prezzo: 15.99 },
        { nome: "Pantaloni", prezzo: 29.99 },
        { nome: "Scarpe", prezzo: 59.99 }
      ]
    };
  },
  computed: {
    totaleCarrello() {
      let totale = 0;
      for (let i = 0; i < this.carrello.length; i++) {
        totale += this.carrello[i].prezzo;
      }
      return totale;
    }
  }
}).mount('#app');
