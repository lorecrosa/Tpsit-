const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

const DB_FILE = 'post.json';

app.use(express.urlencoded({ extended: false }));

app.get('/post', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/post', (req, res) => {
    const dati = fs.existsSync(DB_FILE) ? JSON.parse(fs.readFileSync(DB_FILE, 'utf8')) : [];
    dati.push(req.body);
    fs.writeFileSync(DB_FILE, JSON.stringify(dati, null, 2));
    res.send('Dato salvato! <a href="/post">Torna indietro</a>');
});

app.post('/clear', (req, res) => {
    fs.writeFileSync(DB_FILE, JSON.stringify([]));
    res.send('Tutti i dati sono stati cancellati! <a href="/post">Torna indietro</a>');
});

app.listen(3000, () => console.log('Server in ascolto su http://localhost:3000/post'));