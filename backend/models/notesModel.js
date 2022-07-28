const mongoose = require("mongoose");

const notesSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add a text value"],
    },
    description: {
        type: String,
        required: [true, "Please add a description value"]
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Note",notesSchema)