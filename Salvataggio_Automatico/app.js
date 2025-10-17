const { createApp } = Vue;

createApp({
  data() {
    return {
      contenuto: '',
      messaggioSalvataggio: ''
    };
  },
  watch: {
    contenuto() {
      this.messaggioSalvataggio = 'Sto salvando...';

      if (this._timer) {
        clearTimeout(this._timer);
      }

      this._timer = setTimeout(() => {
        this.messaggioSalvataggio = 'Salvato!';
      }, 1000);
    }
  }
}).mount('#app');
