const mongoose = require('mongoose');


// ---------- Table Instructions Used in MongoDB----------
const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        minlength: [2, "Title must be at least 2 charcters"]
    },

    price: {
        type: Number,
        required: [true, "Price is required"],
        min: [1, "Price must be at least 1 character"]
    },

    description: {
        type: String,
        required: [true, "Description is required"],
        minlength: [4, "Description must be at least 4 characters"]
    }
    
},
{timestamps:true}
)

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;