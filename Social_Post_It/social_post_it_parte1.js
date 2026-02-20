const express = require('express');
const fs = require('fs');
const app = express();

const DB_FILE = 'post.json';

app.use(express.urlencoded({ extended: false }));

// 1. Pagina con Form di invio e tasto Cancella
app.get('/post', (req, res) => {
    res.send(`
        <form action="/post" method="POST">
            <input name="content" placeholder="Scrivi qualcosa" required>
            <button type="submit">Invia</button>
        </form>
        <br>
        <form action="/clear" method="POST">
            <button type="submit" style="color: red;">Cancella tutto</button>
        </form>
    `);
});

// 2. Salva i dati
app.post('/post', (req, res) => {
    const dati = fs.existsSync(DB_FILE) ? JSON.parse(fs.readFileSync(DB_FILE, 'utf8')) : [];
    dati.push(req.body);
    fs.writeFileSync(DB_FILE, JSON.stringify(dati));
    res.send('Dato salvato! <a href="/post">Torna indietro</a>');
});

// 3. Svuota il file JSON
app.post('/clear', (req, res) => {
    fs.writeFileSync(DB_FILE, JSON.stringify([]));
    res.send('Tutti i dati sono stati cancellati! <a href="/post">Torna indietro</a>');
});

app.listen(3000, () => console.log('Server in ascolto su http://localhost:3000/post'));