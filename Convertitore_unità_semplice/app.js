const { createApp } = Vue;

createApp({
  data() {
    return {
      kg: 0
    };
  },
  computed: {
    grammi() {
      return this.kg * 1000;
    }
  }
}).mount('#app');
