const express = require('express');
const path = require('path');

const PORT = 3000;

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/',(req,res) => {

    res.render('guestbook');

});

app.listen(PORT,() => {
    console.log(`The server running on http://localhost:${PORT}`);
});