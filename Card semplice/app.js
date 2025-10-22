const { createApp } = Vue;

createApp({
  components: {
    'info-card': {
      template: `
        <div class="info-card">
          <h3>Titolo della Card</h3>
          <p>Contenuto della card...</p>
        </div>
      `
    }
  }
}).mount('#app');
