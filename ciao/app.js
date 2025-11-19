const app = Vue.createApp({
  data() {
    return {
      fase: 1,        // 1 = benvenuto, 2 = inserimento username
      nomeTemp: "",   // input temporaneo
      username: null  // salvato (se serve)
    };
  },
  methods: {
    salvaNickname() {
      const nome = this.nomeTemp.trim();
      if (nome !== "") {
        this.username = nome;
        alert("Nickname impostato: " + nome); // puoi cambiarlo o rimuoverlo
      }
    }
  }
});

app.mount("#app");
