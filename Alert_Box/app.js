const { createApp } = Vue;

const app = createApp({});

app.component('alert-box', {
  props: {
    messaggio: String,
    tipo: {
      type: String,
      default: 'success'
    }
  },
  template: `
    <div class="alert-box" :class="tipo">
      {{ messaggio }}
    </div>
  `
});

app.mount('#app');
