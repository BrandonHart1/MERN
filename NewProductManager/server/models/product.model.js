const mongoose = require('mongoose'); // translates to create a table


//----- Instructions to create a collection (model) -----
const ProductSchema = new mongoose.Schema({
    title: {
        type: String,    // ----- What kind of data type it will be.
        required: [true, "Title is required"], 
        minlength: [2, "Title must be at least 2 characters"]
    },

    price: {
        type: Number, 
        required: [true, "Price is required"], 
        min: [1, "Price must be highter than 1"]  // use "min" instead of minlength
    },

    description: {
        type: String, 
        required: [true, "Description is required"], 
        minlength: [2, "Description must be at least 2 characters"] 
    },
    },
    { timestamps:true }
)


// ----- Instructions above will be used as a collection (model) in mongodb -----
const Product = mongoose.model('Product', ProductSchema);

// ----- So other files can communicate with this model file -----
module.exports = Product;