// controllers/GeminiController.js
const AsyncHandler = require("../Utils/AsyncHandler");
const ContentAnalyzer = require("../Services/ContentAnalyzer");
const GeminiService = require("../Services/GeminiService");
const StudyModel = require("../Models/Study Materials.Model");

const AnalyzeContent = AsyncHandler(async (req, res) => {
    try {
        const { content, contentType = 'text' } = req.body;
        
        if (!content) {
            return res.status(400).json({
                success: false,
                message: "Content is required"
            });
        }
        
        const analysis = await GeminiService.analyzeStudyMaterial(content, contentType);
        
        return res.status(200).json({
            success: true,
            message: "Content analyzed successfully",
            data: analysis
        });
        
    } catch (error) {
        console.error("Analysis error:", error);
        return res.status(500).json({
            success: false,
            message: "Analysis failed",
            error: error.message
        });
    }
});

const ProcessUpload = AsyncHandler(async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "No file uploaded"
            });
        }
        
        const result = await ContentAnalyzer.processStudyMaterial(
            req.file.buffer,
            req.file.mimetype.split('/')[1], // Extract file extension
            req.file.originalname
        );
        
        if (!result.success) {
            return res.status(400).json({
                success: false,
                message: "File processing failed",
                error: result.error
            });
        }
        
        return res.status(200).json({
            success: true,
            message: "File processed successfully",
            data: result
        });
        
    } catch (error) {
        console.error("Upload processing error:", error);
        return res.status(500).json({
            success: false,
            message: "Upload processing failed",
            error: error.message
        });
    }
});

const GetRecommendations = AsyncHandler(async (req, res) => {
    try {
        const { userId } = req.params;
        const { limit = 10 } = req.query;
        
        // Get user history (you'll need to implement this)
        const userHistory = await StudyModel.find({ viewedBy: userId }).limit(20);
        
        // Get all resources
        const allResources = await StudyModel.find().limit(50);
        
        const recommendations = await GeminiService.generateRecommendations(
            userId,
            userHistory,
            allResources
        );
        
        return res.status(200).json({
            success: true,
            message: "Recommendations generated",
            data: recommendations
        });
        
    } catch (error) {
        console.error("Recommendation error:", error);
        return res.status(500).json({
            success: false,
            message: "Failed to generate recommendations",
            error: error.message
        });
    }
});

const EnhanceSearch = AsyncHandler(async (req, res) => {
    try {
        const { query } = req.query;
        
        if (!query || query.trim().length === 0) {
            return res.status(400).json({
                success: false,
                message: "Search query is required"
            });
        }
        
        const enhancedSearch = await GeminiService.enhanceSearchQuery(query);
        
        return res.status(200).json({
            success: true,
            message: "Search query enhanced",
            data: enhancedSearch
        });
        
    } catch (error) {
        console.error("Search enhancement error:", error);
        return res.status(500).json({
            success: false,
            message: "Search enhancement failed",
            error: error.message
        });
    }
});

const CheckPlagiarism = AsyncHandler(async (req, res) => {
    try {
        const { content } = req.body;
        
        if (!content) {
            return res.status(400).json({
                success: false,
                message: "Content is required for plagiarism check"
            });
        }
        
        // Get existing resources to compare with
        const existingResources = await StudyModel.find()
            .select('name description content')
            .limit(20);
        
        const plagiarismCheck = await GeminiService.checkPlagiarism(content, existingResources);
        
        return res.status(200).json({
            success: true,
            message: "Plagiarism check completed",
            data: plagiarismCheck
        });
        
    } catch (error) {
        console.error("Plagiarism check error:", error);
        return res.status(500).json({
            success: false,
            message: "Plagiarism check failed",
            error: error.message
        });
    }
});

module.exports = {
    AnalyzeContent,
    ProcessUpload,
    GetRecommendations,
    EnhanceSearch,
    CheckPlagiarism
};