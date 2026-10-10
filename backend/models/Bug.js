const mongoose = require("mongoose");

const bugSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true,
        enum: [
            "Logic",
            "Security",
            "Performance",
            "Database",
            "Concurrency",
            "Runtime"
        ]
    },
    difficulty: {
        type: String,
        required: true,
        enum: ["Easy", "Medium", "Hard"]
    },
    brokenCode: {
        type: String,
        required: true
    },
    fixedCode: {
        type: String,
        required: true
    },
    expectedOutput: {
        type: String,
        required: true
    },
    explanation: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Bug", bugSchema);