const mongoose = require('mongoose');


const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "Setup must be at least 10 characters long"],
        minlength: []
    },

    punchline: {
        type: String,
        required: [true, "Punchline must be at least 3 characters long"],
        minlength: []
    }
    },
    {timestamps:true}


)










const Joke = mongoose.model('Joke', JokeSchema);

module.exports = Joke;
