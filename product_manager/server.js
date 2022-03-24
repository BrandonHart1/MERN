const express = require('express');
const app = express();
const port = 8000;
const cors = require("cors");

app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
app.use(cors() )

// ----- Let the server know to run the code in the mongoose.config.js file -----
require("./server/config/mongoose.config");


// -------- Tell the server to connect to the routes --------
require("./server/routes/product.routes")(app)





// -------- Needs to be below all other code --------
app.listen(port, () => console.log(`Listening on port: ${port}`) );