const { createApp } = Vue;

createApp({
  data() {
    return {
      luceAccesa: false
    };
  },
  methods: {
    toggleLuce() {
      this.luceAccesa = !this.luceAccesa;
    }
  }
}).mount('#app');
