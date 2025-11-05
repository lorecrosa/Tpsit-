const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      modaleAperta: false
    }
  }
});

app.component('modal-dialog', {
  template: `
    <div class="overlay">
      <div class="modal">
        <h3>Finestra Modale</h3>
        <p>Questa è una modale di esempio.</p>
        <button @click="$emit('chiudi')">Chiudi</button>
      </div>
    </div>
  `
});

app.mount('#app');
