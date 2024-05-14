const express = require('express');
const app = express();
const port = 8000;

app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));

app.get('', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})
app.listen(port, () => console.info(`Listening on port ${port}...`));