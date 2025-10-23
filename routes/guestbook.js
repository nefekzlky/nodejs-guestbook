const express = require('express');
const router = express.Router();

let guestbookEntries = [];

router.get('/',(req,res) => {

    res.render('guestbook');

});

router.post('/sign',(req,res) => {

    const name = req.body.name;
    const message = req.body.message;

    guestbookEntries.push({name,message});

    res.redirect('/');
    
});

module.exports = router;