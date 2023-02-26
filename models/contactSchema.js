const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const contactSchema = new Schema({
    
    first_name: {
        type: String,
        required: true,
        trim: true
    },

    last_name: {
        type: String,
        required: true,
        trim: true
    },

    email: {
        type: String,
        required: true,
        trim: true
    },

    mobile_number: {
        type: Number,
        required: true,
        trim: true
    },

    data_store: {
        type: String,
        required: true,
        trim: true,
        default: "DATABASE"
    }

})

module.exports = mongoose.model("Contact", contactSchema);