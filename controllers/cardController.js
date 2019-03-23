const Card = require('../models/Card.js');

const cardController = {
    index: (req, res) => {
        Card.find().then((cards) => {
            res.render('index', {cards});
        });
    },
    new: (req, res) => {
        res.render('new');
    },
    create: (req, res) => {
        Card.create(req.body).then(card => {
            res.redirect('/');
        });
    },
    show: (req, res) => {
        let cardId = req.params.cardId;
        Card.findById(cardId).then(card => {
            res.render('album', {card, cardId})
        });
    },
    edit: (req, res) => {
        Card.findById(req.params.cardId).then(card => {
            res.render('edit', {card});
        });
    },
    update: (req, res) => {
        Card.findByIdAndUpdate(req.params.cardId, req.body, {new: true}).then(() => {
            res.redirect(`/${req.params.cardId}`);
        });
    },
    delete: (req, res) => {
        Card.findByIdAndDelete(req.params.cardId).then(() => {
            res.redirect('/');
        });
    }
};

module.exports = cardController;