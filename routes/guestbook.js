const express = require('express');
const router = express.Router();

let guestbookEntries = [];


router.get('/',(req,res) => {


    const reversedEntries = guestbookEntries.slice().reverse();

    res.render('guestbook', { entries: reversedEntries });
});


router.post('/sign',(req,res) => {

    const name = req.body.name;
    const message = req.body.message;

    if (name.trim() !== '' && message.trim() !== '') {
        
        const newEntry = {
            name: name.trim(),
            message: message.trim(),
            timestamp: new Date() 
        };
        

        guestbookEntries.push(newEntry);
    }
    
    res.redirect('/');
});

module.exports = router;

