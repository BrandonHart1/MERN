const JokeController = require('../controllers/joke.controller')

module.exports = (app) => {
    app.get("/api/test", JokeController.testing)  // working
    app.get("/api/jokes", JokeController.findAllJokes)
    app.get("/api/jokes/:id", JokeController.getOneJoke)
    app.post("/api/jokes", JokeController.createJoke) 
    app.put("/api/jokes/:id", JokeController.updateOneJoke)
    app.delete("/api/jokes/:id", JokeController.deleteOneJoke)
}