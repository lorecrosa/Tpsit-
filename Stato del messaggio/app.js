const { createApp } = Vue;

createApp({
  data() {
    return {
      isActive: false,
      hasError: false,
      dimensioneFont: 16
    };
  },
  computed: {
    messaggio() {
      if (this.hasError) {
        return "Si è verificato un ERRORE durante l'operazione.";
      }
      if (this.isActive) {
        return "Operazione completata con SUCCESSO.";
      }
      return "Messaggio di esempio.";
    }
  },
  methods: {
    setSuccess() {
      this.isActive = true;
      this.hasError = false;
    },
    setError() {
      this.isActive = false;
      this.hasError = true;
    }
  }
}).mount('#app');
