const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://root:root@cluster0.mxvvj.mongodb.net/jokes?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

    .then(() => console.log('Established a connection to the database'))
    // ^^^ if accepted ^^^
    .catch(err => console.log('Something went wrong when connecting to the database ', err));
    //^^^ if not accepted ^^^
