const express = require('express');
const router = express.Router();

router.get('/',(req,res) => {

    res.render('guestbook');

});

module.exports = router;