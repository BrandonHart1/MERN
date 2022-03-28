const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors")

// make sure these lines are above any app.get or app.post code blocks
// app.use will tell the server to handle post requests and handle form information
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
app.use(cors())

require("./server/config/mongoose.config")

require("./server/routes/pet.routes")(app)

// app.get("/api/hello", (req, res) => {
//     res.json({ message: "Hello World" });
// });




app.listen( port, () => console.log(`Listening on port: ${port}`) );