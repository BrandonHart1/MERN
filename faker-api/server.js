const express = require("express"); // import express so we can use express features
const app = express(); // create an instance of express and sotre it in the variable "app"

app.use( express.json() );
app.use( express.urlencoded({ extended: true }));

const port = 8000; // indicate the port number to run on

const { faker } = require('@faker-js/faker');

class User {
    constructor() {
        this._id = faker.address.longitude();  // Couldn't find an id. Couldn't use uuid for some reason
        this.firstName = faker.name.fistName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password()
    }

}


class Company {
    constructor() {
        this.id = 
        this.name = faker.commerce.productName();
        this.street = faker.address.streetName();
        this.city = faker.address.city();
        this.state = faker.address.state();
        this.zipCode = faker.address.zipCode();
        this.country = faker.address.country()
    }
}

app.post("/api/user", (req, res) => {
    let user = new User ()
    user.push(req.body)
    res.json({})
})

app.post("/api/user/company", (req, res) => {
    let user = new User ()
    let company = new Company ()
    user.company.push(req.body)
    res.json({})
})


// ---------- Needs to be below the ALL other code blocks ----------
app.listen( port, () => console.log(`Listening on port: ${port}`) );  // Tells the app to listen for requests on port 8000








// app.get("/api/users/new", (req, res) => {
//     let user = new User ()
//     res.json({"result": user})
// });

// app.get("api/user/company", (req, res) => {
//     let user = new User ()
//     let company = new Company ()
//     res.json({"result": user.company})
// })

/*

*/
