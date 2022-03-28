const mongoose = require('mongoose');


const PetSchema = new mongoose.Schema({

    petName: {
        type:String,
        required: [true, "Pet's Name is Required"], 
        minlength: [3, "Pet's Name Must Be At Least 3 Characters"],
    },

    type: {
        type: String,
        required: [true, "Pet Type is Required"],
        minlength: [3, "Pet Type Must Be At Least 3 Characters"]
    },

    description: {
        type: String,
        required: [true, "Pet Desciption is Required"],
        minlength: [3, "Pet Desciption Must Be At Least 3 Characters"],
    },

    skills: {
        type: String,
        required: [true, "Please Tell Us Your Pet's Skills"],
        minlength: [3, "Pets Skills Must Be At Least 3 Characters"]
    },

    },

    {timestamps:true}

)







const Pet = mongoose.model('Pet', PetSchema)

module.exports = Pet;