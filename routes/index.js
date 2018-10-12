var express = require('express');
var router = express.Router();
var Review = require('../models/review');


router.get('/', (req, res) => {
    Review.find({}, (err, reviews) => {
        if (err) {
            console.log(err);
        }

        res.render('reviews/index', {
            reviews: reviews
        });
    });
});

router.get('/reviews/new', function (req, res, next) {
    res.render('reviews/new');
});

router.get('/reviews/:id', (req, res) => {
    var id = req.params.id;
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
        Review.findById(id, (err, review) => {
            if (err) {
                console.log(err);
            }
            res.render('reviews/show', {
                review: review
            });
        });
    }
});


router.post('/reviews', (req, res) => {
    const review = new Review(req.body);
    review.save(function (err, review) {
        if (err) {
            console.log(err);
        }
        return res.redirect('/reviews/' + review.id);
    });
});


module.exports = router;
