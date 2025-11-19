const { createApp } = Vue;

createApp({
    data() {
        return {
            skin: "#f1c27d",
            shirt: "#4fa3ff",
            pants: "#3c3c3c",
            hairColor: "#331a00",
            hairStyle: "short",
            eyeStyle: "round",
            mouthStyle: "smile",
            beardStyle: "none",
        };
    },

    computed: {
        avatarSVG() {
            // Occhi
            const eyes = {
                round: `<circle cx="75" cy="60" r="6" fill="black"/>
                       <circle cx="125" cy="60" r="6" fill="black"/>
                       <circle cx="77" cy="58" r="2" fill="white"/>
                       <circle cx="127" cy="58" r="2" fill="white"/>`,
                anime: `<ellipse cx="75" cy="60" rx="5" ry="10" fill="black"/>
                        <ellipse cx="125" cy="60" rx="5" ry="10" fill="black"/>
                        <circle cx="75" cy="55" r="2" fill="white"/>
                        <circle cx="125" cy="55" r="2" fill="white"/>`,
                sleepy: `<rect x="70" y="58" width="10" height="4" fill="black"/>
                         <rect x="120" y="58" width="10" height="4" fill="black"/>`
            }[this.eyeStyle];

            // Bocca centrata
            const mouthY = 60 + 25; // leggermente più alto per stare nel cerchio
            const mouth = {
                smile: `<path d="M80 ${mouthY} Q100 ${mouthY + 10} 120 ${mouthY}" stroke="black" stroke-width="3" fill="none"/>`,
                flat: `<line x1="80" y1="${mouthY}" x2="120" y2="${mouthY}" stroke="black" stroke-width="3"/>`,
                open: `<ellipse cx="100" cy="${mouthY}" rx="8" ry="5" fill="red"/>`
            }[this.mouthStyle];

            // Barba
            const beard = {
                none: ``,
                goatee: `<path d="M95 ${mouthY+5} Q100 ${mouthY+15} 105 ${mouthY+5}" stroke="#331a00" stroke-width="2" fill="#331a00"/>`,
                full: `<ellipse cx="100" cy="${mouthY+12}" rx="25" ry="10" fill="#331a00"/>`
            }[this.beardStyle];

            // Capelli corti o lunghi
            let hair = '';
            if(this.hairStyle === 'short'){
                hair = `<rect x="60" y="20" width="80" height="40" rx="8" fill="${this.hairColor}">
                          <animate attributeName="y" values="20;22;20" dur="2s" repeatCount="indefinite"/>
                        </rect>`;
            } else if(this.hairStyle === 'long'){
                hair = `
                <!-- Capelli lunghi dietro -->
                <path d="M60,30 Q40,70 50,110 Q65,140 100,145 Q135,140 150,110 Q160,70 140,30 Q100,20 60,30 Z" fill="${this.hairColor}"/>
                <animateTransform attributeName="transform" type="translate" values="0,0; 1,2; -1,1; 0,0" dur="4s" repeatCount="indefinite"/>
                <!-- Ciuffo frontale -->
                <path d="M70,25 Q100,15 130,25 Q135,35 130,40 Q100,30 70,40 Z" fill="${this.hairColor}"/>
                `;
            }

            return `
            <svg width="100%" height="100%" viewBox="0 0 200 250" xmlns="http://www.w3.org/2000/svg">
              
              <!-- Ombra sotto testa -->
              <ellipse cx="100" cy="105" rx="40" ry="8" fill="rgba(0,0,0,0.1)"/>
              
              <!-- Capelli dietro (solo lunghi) -->
              ${this.hairStyle === 'long' ? `
                <path d="M60,30 Q40,70 50,110 Q65,140 100,145 Q135,140 150,110 Q160,70 140,30 Q100,20 60,30 Z" fill="${this.hairColor}"/>
                <animateTransform attributeName="transform" type="translate" values="0,0; 1,2; -1,1; 0,0" dur="4s" repeatCount="indefinite"/>
              ` : ''}

              <!-- Testa -->
              <circle cx="100" cy="60" r="40" fill="${this.skin}"/>

              <!-- Ciuffo frontale -->
              ${this.hairStyle === 'long' ? `<path d="M70,25 Q100,15 130,25 Q135,35 130,40 Q100,30 70,40 Z" fill="${this.hairColor}"/>` : hair}

              <!-- Occhi -->
              ${eyes}

              <!-- Bocca -->
              ${mouth}

              <!-- Barba -->
              ${beard}

              <!-- Corpo -->
              <rect x="70" y="100" width="60" height="80" fill="${this.shirt}" rx="10"/>
              <rect x="72" y="100" width="56" height="80" fill="white" opacity="0.08" rx="10"/>

              <!-- Braccia -->
              <rect x="50" y="100" width="20" height="70" fill="${this.skin}" rx="8"/>
              <rect x="130" y="100" width="20" height="70" fill="${this.skin}" rx="8"/>

              <!-- Gambe -->
              <rect x="75" y="180" width="20" height="50" fill="${this.pants}" rx="5"/>
              <rect x="105" y="180" width="20" height="50" fill="${this.pants}" rx="5"/>

              <!-- Scarpe -->
              <rect x="72" y="230" width="25" height="10" fill="#222" rx="3"/>
              <rect x="103" y="230" width="25" height="10" fill="#222" rx="3"/>
              <rect x="72" y="235" width="25" height="3" fill="#555" rx="2"/>
              <rect x="103" y="235" width="25" height="3" fill="#555" rx="2"/>
            </svg>
            `;
        }
    },

    methods: {
        downloadPNG() {
            const avatarDiv = document.getElementById("avatar");
            const svg = avatarDiv.innerHTML;

            const svgBlob = new Blob([svg], { type: "image/svg+xml;charset=utf-8" });
            const url = URL.createObjectURL(svgBlob);

            const img = new Image();
            img.onload = () => {
                const canvas = document.createElement("canvas");
                canvas.width = 200;
                canvas.height = 250;
                const ctx = canvas.getContext("2d");
                ctx.drawImage(img, 0, 0);

                const link = document.createElement("a");
                link.download = "mii.png";
                link.href = canvas.toDataURL();
                link.click();

                URL.revokeObjectURL(url);
            };

            img.src = url;
        }
    }
}).mount("#app");
