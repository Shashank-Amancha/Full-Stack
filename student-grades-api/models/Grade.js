const mongoose = require("mongoose");

const gradeSchema = new mongoose.Schema({
    student_name: {
        type: String,
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    grade: {
        type: Number,
        required: true,
        min: 0,
        max: 100
    }
}, { timestamps: true });

module.exports = mongoose.model("Grade", gradeSchema);