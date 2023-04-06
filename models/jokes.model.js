const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    setup: {type: String},
    punchline: {type: String},
    created_at: {type: Date, default: Date.now()},
    updated_at: {type: Date, default: Date.now()}
});

const Joke = mongoose.model('joke', JokeSchema);

module.exports = Joke;