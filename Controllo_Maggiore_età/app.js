const { createApp } = Vue;

createApp({
    data() {
        return {
            eta: '',
            messaggioEta: ''
        }
    },
    methods: {
        controlloEta() {
            const etaNum = this.eta;
            if (etaNum >= 18) {
                return 'maggiorenne'
            } else {
                return 'minorenne'
            }
        }
    },
}).mount('#app');