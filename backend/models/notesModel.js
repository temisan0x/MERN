const mongoose = require("mongoose");
//field for data field resource

const notesSchema = mongoose.Schema({
    text: {
        type: String,
        required: [true, "Please add a title value"]
    },
},{
    timestamps: true
});

module.exports = mongoose.model("Note",notesSchema)