const PetController = require('../controllers/pet.controller')


module.exports = (app) => {
    app.get('api/hello', PetController.helloWorld)

    app.get('/api/pets', PetController.findAllPets)

    app.post('/api/pets/new', PetController.createPets)

    app.get('/api/pets/:_id', PetController.getOnePet)

    app.put('/api/pets/edit/:_id', PetController.updateOnePet)

    app.delete('/api/pets/:_id', PetController.deleteOnePet)
}
