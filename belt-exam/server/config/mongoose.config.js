const mongoose = require('mongoose');

// change the url
mongoose.connect("mongodb+srv://root:root@cluster0.hgxjm.mongodb.net/belt_db?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a connection to the database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));