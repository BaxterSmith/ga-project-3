require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

let Card = require('../models/Card.js');

const fermata = new Card({
    skillLevel: 3,
    category: 'symbols',
    question: 'What is the term for the symbol used to hold a note longer than its original value?',
    answer: 'fermata'
});
const cMinor = new Card({
    skillLevel: 1,
    category: 'chords',
    question: 'Which notes make up a C minor chord?',
    answer: 'C, Eb, G'
});
const bagpipe = new Card({
    skillLevel: 3,
    category: 'instruments',
    question: 'What Scottish instrument is often played at parades and funerals?',
    answer: 'bagpipe'
});
const liszt = new Card({
    skillLevel: 5,
    category: 'composers',
    question: 'What Hungarian composer wrote his Liebesträume No. 3 in 1850?',
    answer: 'Franz Liszt'
});
const timbre = new Card({
    skillLevel: 4,
    category: 'musicality',
    question: 'What is the technical term for the tone color of an instrument or voice?',
    answer: 'timbre'
});
const harpsichord = new Card({
    skillLevel: 2,
    category: 'instruments',
    question: 'What keyboard instrument has a buzzing timbre and is usually associated with 18th-century minuets?',
    answer: 'harpsichord'
});