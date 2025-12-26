// models/GeminiCache.js
const mongoose = require("mongoose");

const geminiCacheSchema = new mongoose.Schema({
    contentHash: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    geminiResponse: {
        type: mongoose.Schema.Types.Mixed,
        required: true
    },
    metadata: {
        contentType: String,
        wordCount: Number,
        analyzedAt: Date
    },
    createdAt: {
        type: Date,
        default: Date.now,
        index: { expires: '7d' } // Auto-delete after 7 days
    }
});

// Additional index for faster lookups
geminiCacheSchema.index({ createdAt: 1 });

const GeminiCache = mongoose.model("GeminiCache", geminiCacheSchema);

module.exports = GeminiCache;