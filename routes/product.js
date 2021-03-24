const express = require('express');
const router = express.Router();
const path = require('path');

const fs = require('fs');




router.get('/product:id', function (req, res) {
    console.log(req.params.id);
    // res.send("Get All");
    fs.readFile(path.join(__dirname, "../public/product.json"), "utf8", (err, product) => {
        if (err) {
            return res.status(400).send("oops! something went wrong");
        };
        product = JSON.parse(product);
        let temp = product[req.params.id-1];


        if (!product) return res.status(404).send("product Not Found");

        res.render('pages/product', {
            temp
        });
    })
    // res.render('pages/contact', data)
})





module.exports = router;