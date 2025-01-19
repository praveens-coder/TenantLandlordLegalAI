const express = require('express');
const router = express.Router();
const LegalLaw = require('../models/Law');

// GET: Fetch legal laws by state and category
router.get('/:state/:category', async (req, res) => {
    try {
        const { state, category } = req.params;
        const laws = await LegalLaw.find({ state, category });

        if (laws.length === 0) {
            return res.status(404).json({ message: "No laws found for this category in the selected state." });
        }

        res.json(laws);
    } catch (error) {
        console.error("Error fetching laws:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

module.exports = router;
