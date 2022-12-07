const express = require('express');
const router = express.Router();
const Acts = require('../models/act');

router.get('/acts/gt', (req, res, next) => {
    Acts.find({}, 'ActName')
        .then((data) => res.json(data))
        .catch(next);
});

router.post('/acts/pst', (req, res, next) => {
    if (req.body.ActName)
    {
        Acts.create(req.body)
            .then((data) => res.json(data))
            .catch(next);

        console.log(data);
    }
    else
    {
        res.json({
            error: `Data error!`
        });
    }
});

module.exports = router;