const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema ({
    name: {
        type: String,
        require: true
    },
    author: {
        type: String,
        require: true
    },
    decription: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    available: {
        type: Boolean,
    },
    image: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Book", bookSchema);

//books