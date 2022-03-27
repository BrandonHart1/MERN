const AuthorController = require('../controllers/author.controller')

module.exports = (app) => {
    app.get('/api/hello', AuthorController.helloWorld)

    app.get('/api/authors', AuthorController.findAllAuthors)

    app.post('/api/authors/new', AuthorController.createAuthors)

    app.get('/api/authors/:_id', AuthorController.getOneAuthor)

    app.put('/api/authors/edit/:_id', AuthorController.updateOneAuthor)

    app.delete('/api/authors/:_id', AuthorController.deleteOneAuthor)
}