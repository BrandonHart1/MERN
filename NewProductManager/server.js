const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors") // allows backend api to communicate with front end app (Cross Origin Resourse Sharing)

// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
app.use(cors())

// Tell the server to run the code in the mongoose.config.js
require("./server/config/mongoose.config")

// Connect to the routes file
require("./server/routes/product.routes")(app)  // passed in from the app variable at the top




app.listen( port, () => console.log(`Listening on port: ${port}`) );