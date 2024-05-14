const express = require('express');

const PORT = 8000
const HOST = '0.0.0.0'

const app = express();
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));

app.get('', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})
app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)