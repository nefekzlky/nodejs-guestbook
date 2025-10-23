const express = require('express');
const path = require('path');

const guestbookRoutes = require('./routes/guestbook');

const PORT = 3000;

const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/',guestbookRoutes);



app.listen(PORT,() => {
    console.log(`The server running on http://localhost:${PORT}`);
});