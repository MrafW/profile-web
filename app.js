const express = require('express');

const app = express();

app.use(express.static('public'));

app.set('views', './views');
app.set('view engine', 'ejs');

app.use('/css', express.static(__dirname + 'public/css'));

app.get('/', (req, res) => {
    res.render('index')
})

const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log(`Server is up and listening at port: ${PORT}`)
})
