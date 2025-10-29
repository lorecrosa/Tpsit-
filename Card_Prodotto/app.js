const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            prodotti: [
                { id: 1, nome: 'Piatti', prezzo: 2.50 },
                { id: 2, nome: 'Felpa', prezzo: 35.99 },
                { id: 3, nome: 'Libro', prezzo: 15.00 }
            ]
        }
    }
});

app.component('product-card', {

    props: {
        nome: String,
        prezzo: String
    },

    template: `
      <div class="box">
        <span>{{ nome }} - {{ prezzo }} €</span>&nbsp;&nbsp;
      </div>
    `
});

app.mount('#app');