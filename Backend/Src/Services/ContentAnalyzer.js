// services/ContentAnalyzer.js
const mammoth = require("mammoth");
const pdfParse = require("pdf-parse");
const fs = require("fs").promises;
const path = require("path");
const GeminiService = require("./GeminiService");

class ContentAnalyzer {
    /**
     * Extract text from different file types
     */
    async extractTextFromFile(fileBuffer, fileType) {
        try {
            switch (fileType.toLowerCase()) {
                case 'pdf':
                    const pdfData = await pdfParse(fileBuffer);
                    return pdfData.text;
                    
                case 'doc':
                case 'docx':
                    const docResult = await mammoth.extractRawText({ buffer: fileBuffer });
                    return docResult.value;
                    
                case 'txt':
                    return fileBuffer.toString('utf-8');
                    
                default:
                    throw new Error(`Unsupported file type: ${fileType}`);
            }
        } catch (error) {
            console.error("Text extraction error:", error);
            throw new Error(`Failed to extract text: ${error.message}`);
        }
    }

    /**
     * Process uploaded study material
     */
    async processStudyMaterial(fileBuffer, fileType, originalName) {
        try {
            // 1. Extract text
            const textContent = await this.extractTextFromFile(fileBuffer, fileType);
            
            if (!textContent || textContent.trim().length === 0) {
                throw new Error("Empty or unreadable file content");
            }
            
            // 2. Analyze with Gemini
            const analysis = await GeminiService.analyzeStudyMaterial(textContent, fileType);
            
            // 3. Check for plagiarism (basic check)
            const plagiarismCheck = await GeminiService.checkPlagiarism(textContent);
            
            // 4. Generate metadata
            const metadata = {
                fileName: originalName,
                fileType,
                fileSize: fileBuffer.length,
                wordCount: analysis.wordCount || textContent.split(/\s+/).length,
                characterCount: textContent.length,
                analysis,
                plagiarism: plagiarismCheck,
                processingStatus: "completed",
                processedAt: new Date()
            };
            
            return {
                success: true,
                metadata,
                contentPreview: textContent.substring(0, 500) + "...",
                recommendations: analysis.suggestedTags || []
            };
            
        } catch (error) {
            console.error("Content processing error:", error);
            return {
                success: false,
                error: error.message,
                metadata: {
                    fileName: originalName,
                    fileType,
                    processingStatus: "failed",
                    error: error.message,
                    processedAt: new Date()
                }
            };
        }
    }

    /**
     * Validate study material
     */
    validateStudyMaterial(content, fileType) {
        const validations = [];
        
        // Check file type
        const allowedTypes = ['pdf', 'doc', 'docx', 'txt'];
        if (!allowedTypes.includes(fileType.toLowerCase())) {
            validations.push({
                type: "FILE_TYPE",
                status: "FAILED",
                message: `Unsupported file type: ${fileType}`
            });
        }
        
        // Check content length
        if (content.length < 100) {
            validations.push({
                type: "CONTENT_LENGTH",
                status: "WARNING",
                message: "Content seems too short for a study material"
            });
        }
        
        // Check for inappropriate content (basic)
        const inappropriateKeywords = ['cheat', 'illegal', 'plagiarized'];
        const lowerContent = content.toLowerCase();
        inappropriateKeywords.forEach(keyword => {
            if (lowerContent.includes(keyword)) {
                validations.push({
                    type: "CONTENT_QUALITY",
                    status: "FLAGGED",
                    message: `Content contains flagged keyword: ${keyword}`
                });
            }
        });
        
        return {
            isValid: validations.every(v => v.status !== "FAILED"),
            validations,
            requiresReview: validations.some(v => v.status === "FLAGGED")
        };
    }
}

module.exports = new ContentAnalyzer();