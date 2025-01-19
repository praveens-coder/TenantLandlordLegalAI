const mongoose = require('mongoose');

const LawSchema = new mongoose.Schema({
    state: { type: String, required: true },  // Example: "California"
    category: { type: String, required: true },  // Example: "Evictions"
    lawText: { type: String, required: true },  // Full legal text
    source: { type: String }  // Link to official source (optional)
});

module.exports = mongoose.model('LegalLaw', LawSchema);
