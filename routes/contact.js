const express = require('express');
const router = express.Router();
const path = require('path');

const fs = require('fs');




router.get('/', function (req, res) {
    res.render('pages/contact')

})

module.exports = router;