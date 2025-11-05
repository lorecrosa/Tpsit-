const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      valutazione: 0
    }
  }
});

app.component('star-rating', {
  data() {
    return { valore: 0 };
  },
  methods: {
    imposta(val) {
      this.valore = val;
      this.$emit('imposta-valutazione', val);
    }
  },
  template: `
    <div>
      <span
        v-for="n in 5"
        :key="n"
        class="star"
        :class="{ active: n <= valore }"
        @click="imposta(n)"
      >★</span>
    </div>
  `
});

app.mount('#app');
