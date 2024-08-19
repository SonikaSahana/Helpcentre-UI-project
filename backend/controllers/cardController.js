const Card = require('../models/card');

exports.createCard = async (req, res) => {
    try {
        const { title, description } = req.body;
        const newCard = await Card.create({ title, description });
        res.status(201).json(newCard);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.getAllCards = async (req, res) => {
    try {
        const cards = await Card.findAll();
        res.json(cards);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getCardByTitle = async (req, res) => {
    try {
        const card = await Card.findOne({ where: { title: req.params.title } });
        if (!card) return res.status(404).json({ message: 'Card not found' });
        res.json(card);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
