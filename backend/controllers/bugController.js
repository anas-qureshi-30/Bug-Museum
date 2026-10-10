const Bug = require("../models/Bug");

const createBug = async (req, res) => {
    try {
        const {
            title,
            description,
            category,
            difficulty,
            brokenCode,
            fixedCode,
            expectedOutput,
            explanation
        } = req.body;

        const bug = await Bug.create({
            title,
            description,
            category,
            difficulty,
            brokenCode,
            fixedCode,
            expectedOutput,
            explanation
        });

        res.status(201).json({
            message: "Bug created successfully",
            bug
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to create bug"
        });
    }
};

module.exports = { createBug };