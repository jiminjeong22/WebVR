var express = require('express');
var router = express.Router();
var Village = require('../models/village');

/* GET home page. */
router.get('/', function (req, res) {
    //Village.find(function (err, villages) {
    //    if (err) {
    //        return res.status(500).send({error: 'database failure'});
    //    }
        //console.log('get vill')
        res.render('yes2', {title: 'Express'});
    //});
});

module.exports = router;
