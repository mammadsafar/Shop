const express = require('express');
const router = express.Router();
const path = require('path');

const fs = require('fs');


router.get('/:id', function (req, res) {

    if (req.params.id === "home" || req.params.id === "") {
        console.log(req.params.id);
        fs.readFile(path.join(__dirname, "../public/product.json"), "utf8", (err, product) => {
            if (err) {
                return res.status(400).send("oops! something went wrong");
            };

            product = JSON.parse(product);
            console.log(product);
            if (!product) return res.status(404).send("product Not Found");

            res.render('pages/home', {
                product
            });
        })
    } else {
        console.log(req.params.id);

        fs.readFile(path.join(__dirname, "../public/product.json"), "utf8", (err, temp) => {
            if (err) {
                return res.status(400).send("oops! something went wrong");
            };
            temp = JSON.parse(temp);
            var results = [];
            for (var i = 0; i < temp.length; i++) {
                for (key in temp[i]) {
                    if (temp[i][key].indexOf(req.params.id) != -1) {
                        results.push(temp[i]);
                    }
                }
            }
            console.log(results);
            // let temp = results;
 
            if (results.length === 0) {
                res.render('pages/notFound');
            } else {
                let product = results;
                res.render('pages/search', {
                    product
                });
                console.log("success");
            }

        })
    }





})




module.exports = router;