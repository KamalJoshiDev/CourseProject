// routes/GeminiRoutes.js
const express = require("express");
const multer = require("multer");
const {
    AnalyzeContent,
    ProcessUpload,
    GetRecommendations,
    EnhanceSearch,
    CheckPlagiarism
} = require("../Controller/GeminiController");

const router = express.Router();

// Configure multer for file uploads
const upload = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 10 * 1024 * 1024, // 10MB limit
    },
    fileFilter: (req, file, cb) => {
        const allowedTypes = [
            'application/pdf',
            'application/msword',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            'text/plain'
        ];
        
        if (allowedTypes.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error('Invalid file type. Only PDF, DOC, DOCX, TXT are allowed.'));
        }
    }
});

// Gemini AI Routes
router.route("/analyze").post(AnalyzeContent);
router.route("/process-upload").post(upload.single('file'), ProcessUpload);
router.route("/recommendations/:userId").get(GetRecommendations);
router.route("/enhance-search").get(EnhanceSearch);
router.route("/check-plagiarism").post(CheckPlagiarism);

module.exports = router;