const mongoose = require("mongoose");
//field for data field resource
//every notes is associated with a specific user

const notesSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User' //associate user with notes
    },
    text: {
        type: String,
        required: [true, "Please add a title value"]
    },
},{
    timestamps: true
});

module.exports = mongoose.model("Note",notesSchema)