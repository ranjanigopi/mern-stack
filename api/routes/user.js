const express = require('express');
const {User} = require('../models/user');
const crypto = require('crypto');

const router = express.Router();

module.exports = router;

router.post('/', (req, res) => {
    const user = new User({
        username: req.body.username,
        password: crypto.createHash('sha256').update(req.body.password).digest().toString('hex')
    });
    user.save()
        .then((result) => {
            res.send({id: result._id});
        })
        .catch((error) => {
            res.status(409);
            res.send({error: error.message});
        });
});

router.get('/all', (req, res) => {
    User.find()
        .then((result) => {
            res.send(result);
        });
});

router.get('/:id', (req, res) => {
    User.findById(req.params.id)
        .then((result) => {
            res.send(result);
        });
});


