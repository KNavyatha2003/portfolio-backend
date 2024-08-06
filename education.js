const mongoose = require('mongoose');

const EducationSchema = new mongoose.Schema({
    institution: { type: String, required: true },
    degree: { type: String, required: true },
    fieldOfStudy: String,
    startYear: Number,
    endYear: Number
});

module.exports = mongoose.model('Education', EducationSchema);
