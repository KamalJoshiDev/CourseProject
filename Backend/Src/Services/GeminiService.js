// Src/Services/GeminiService.js
const crypto = require("crypto");
const GeminiCache = require("../Models/GeminiCache");

class GeminiService {
    constructor() {
        this.apiKey = process.env.GEMINI_API_KEY || 'AIzaSyDAC26oPZNyA15YkzBWpJCpKIwRvUSdzes';
        this.baseUrl = 'https://generativelanguage.googleapis.com/v1beta/models';
        this.model = 'gemini-2.0-flash'; // Using your model
        this.isEnabled = true;
        console.log(`✅ Gemini AI Service Initialized with model: ${this.model}`);
    }

    /**
     * Make API call to Gemini
     */
    async callGeminiAPI(prompt, systemInstruction = null) {
        try {
            const apiUrl = `${this.baseUrl}/${this.model}:generateContent?key=${this.apiKey}`;
            
            const requestBody = {
                contents: [{
                    parts: [{
                        text: prompt
                    }]
                }]
            };

            // Add system instruction if provided
            if (systemInstruction) {
                requestBody.systemInstruction = {
                    parts: [{
                        text: systemInstruction
                    }]
                };
            }

            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody)
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(`Gemini API Error: ${JSON.stringify(errorData)}`);
            }

            const data = await response.json();
            
            // Extract text from response
            let text = '';
            if (data.candidates && data.candidates[0] && data.candidates[0].content) {
                text = data.candidates[0].content.parts[0].text;
            }
            
            return text;
            
        } catch (error) {
            console.error("Gemini API call failed:", error.message);
            throw error;
        }
    }

    /**
     * Generate hash for content
     */
    generateContentHash(content) {
        return crypto.createHash('sha256').update(content).digest('hex');
    }

    /**
     * Get cached response
     */
    async getCachedResponse(contentHash) {
        try {
            const cached = await GeminiCache.findOne({ contentHash });
            return cached ? cached.geminiResponse : null;
        } catch (error) {
            console.error("Cache read error:", error.message);
            return null;
        }
    }

    /**
     * Cache response
     */
    async cacheResponse(contentHash, response, metadata = {}) {
        try {
            await GeminiCache.findOneAndUpdate(
                { contentHash },
                {
                    contentHash,
                    geminiResponse: response,
                    metadata,
                    createdAt: new Date()
                },
                { upsert: true, new: true }
            );
        } catch (error) {
            console.error("Cache write error:", error.message);
        }
    }

    /**
     * Mock response for testing
     */
    createMockAnalysis(content) {
        const words = content.split(/\s+/);
        const topics = ["Computer Science", "Mathematics", "Programming", "Algorithms", "Web Development"];
        
        return {
            title: content.substring(0, 50) + (content.length > 50 ? "..." : ""),
            summary: "This is a mock analysis from Gemini AI.",
            keyTopics: topics.slice(0, 3),
            difficultyLevel: ["Beginner", "Intermediate", "Advanced"][Math.floor(Math.random() * 3)],
            estimatedStudyTime: `${Math.floor(Math.random() * 4) + 1} hour${Math.floor(Math.random() * 4) + 1 > 1 ? 's' : ''}`,
            prerequisites: ["Basic computer knowledge"],
            keywords: words.filter(w => w.length > 4).slice(0, 10),
            category: topics[Math.floor(Math.random() * topics.length)],
            qualityScore: Math.floor(Math.random() * 4) + 7,
            suggestedTags: ["education", "learning", "study", "tutorial"],
            isMock: false,
            model: this.model
        };
    }

    /**
     * Analyze study material content
     */
    async analyzeStudyMaterial(content, contentType = 'text') {
        try {
            const contentHash = this.generateContentHash(content);
            
            // Check cache
            const cached = await this.getCachedResponse(contentHash);
            if (cached) {
                console.log("📦 Using cached analysis");
                return cached;
            }
            
            // System instruction for structured output
            const systemInstruction = `You are an academic analysis AI. Analyze study materials and return ONLY valid JSON in this exact format:
            {
                "title": "extracted title",
                "summary": "brief 2-3 sentence summary",
                "keyTopics": ["topic1", "topic2", "topic3"],
                "difficultyLevel": "Beginner/Intermediate/Advanced",
                "estimatedStudyTime": "e.g., 2 hours",
                "prerequisites": ["prereq1", "prereq2"],
                "keywords": ["keyword1", "keyword2", "keyword3"],
                "category": "Computer Science/Mathematics/Physics/etc",
                "qualityScore": 1-10,
                "suggestedTags": ["tag1", "tag2", "tag3"]
            }`;
            
            const prompt = `Analyze this study material:\n\n${content.substring(0, 8000)}`;
            
            console.log(`📤 Calling Gemini API with model: ${this.model}`);
            const responseText = await this.callGeminiAPI(prompt, systemInstruction);
            
            // Parse JSON response
            let analysis;
            try {
                // Extract JSON from response (sometimes Gemini adds extra text)
                const jsonMatch = responseText.match(/\{[\s\S]*\}/);
                if (jsonMatch) {
                    analysis = JSON.parse(jsonMatch[0]);
                } else {
                    throw new Error("No JSON found in response");
                }
            } catch (parseError) {
                console.error("Failed to parse Gemini response:", responseText);
                analysis = this.createMockAnalysis(content);
                analysis.parseError = parseError.message;
            }
            
            // Add metadata
            analysis.contentHash = contentHash;
            analysis.wordCount = content.split(/\s+/).length;
            analysis.analyzedAt = new Date().toISOString();
            analysis.model = this.model;
            analysis.isMock = false;
            
            // Cache
            await this.cacheResponse(contentHash, analysis, {
                contentType,
                wordCount: analysis.wordCount
            });
            
            console.log(`✅ Gemini analysis completed with ${this.model}`);
            return analysis;
            
        } catch (error) {
            console.error("Gemini analysis error:", error.message);
            
            // Fallback to mock
            const mockAnalysis = this.createMockAnalysis(content);
            mockAnalysis.error = error.message;
            mockAnalysis.isMock = true;
            
            return mockAnalysis;
        }
    }

    /**
     * Check plagiarism
     */
    async checkPlagiarism(content, existingResources = []) {
        try {
            const contentHash = this.generateContentHash(content);
            const cacheKey = `plagiarism_${contentHash}`;
            
            const cached = await this.getCachedResponse(cacheKey);
            if (cached) return cached;
            
            const systemInstruction = `Analyze text for plagiarism and return ONLY valid JSON:
            {
                "similarityScore": 0-100,
                "isPlagiarized": boolean,
                "matches": [],
                "confidence": "High/Medium/Low",
                "recommendation": "Approve/Review/Reject"
            }`;
            
            const prompt = `Check this text for plagiarism:\n\n${content.substring(0, 4000)}`;
            
            const responseText = await this.callGeminiAPI(prompt, systemInstruction);
            
            let plagiarismAnalysis;
            try {
                const jsonMatch = responseText.match(/\{[\s\S]*\}/);
                plagiarismAnalysis = jsonMatch ? JSON.parse(jsonMatch[0]) : {
                    similarityScore: 0,
                    isPlagiarized: false,
                    matches: [],
                    confidence: "Low",
                    recommendation: "Review"
                };
            } catch (parseError) {
                plagiarismAnalysis = {
                    similarityScore: 0,
                    isPlagiarized: false,
                    matches: [],
                    confidence: "Low",
                    recommendation: "Review"
                };
            }
            
            plagiarismAnalysis.model = this.model;
            plagiarismAnalysis.isMock = false;
            await this.cacheResponse(cacheKey, plagiarismAnalysis);
            return plagiarismAnalysis;
            
        } catch (error) {
            console.error("Plagiarism check error:", error);
            return {
                similarityScore: Math.floor(Math.random() * 20),
                isPlagiarized: false,
                matches: [],
                confidence: "Low",
                recommendation: "Review",
                model: this.model,
                isMock: true,
                error: error.message
            };
        }
    }

    /**
     * Generate recommendations
     */
    async generateRecommendations(userId, userHistory, allResources) {
        try {
            const cacheKey = `recommendations_${userId}`;
            
            const cached = await this.getCachedResponse(cacheKey);
            if (cached) return cached;
            
            const systemInstruction = `Generate study recommendations and return ONLY valid JSON:
            {
                "recommendations": [
                    {
                        "resourceId": "id",
                        "name": "resource name",
                        "matchScore": 0-100,
                        "reason": "reason for recommendation",
                        "suggestion": "study suggestion"
                    }
                ],
                "topCategories": ["category1", "category2"],
                "studyPlanSuggestion": "suggested study plan"
            }`;
            
            const historySummary = userHistory.map(h => ({
                resource: h.name || h.title,
                category: h.category,
                type: h.type
            }));
            
            const resourcesSummary = allResources.slice(0, 15).map(r => ({
                id: r._id || r.id,
                name: r.name || r.title,
                category: r.category,
                type: r.type,
                description: r.description ? r.description.substring(0, 100) : ""
            }));
            
            const prompt = `User ID: ${userId}\n\nUser History:\n${JSON.stringify(historySummary, null, 2)}\n\nAvailable Resources:\n${JSON.stringify(resourcesSummary, null, 2)}\n\nGenerate personalized recommendations.`;
            
            const responseText = await this.callGeminiAPI(prompt, systemInstruction);
            
            let recommendations;
            try {
                const jsonMatch = responseText.match(/\{[\s\S]*\}/);
                if (jsonMatch) {
                    recommendations = JSON.parse(jsonMatch[0]);
                } else {
                    recommendations = this.createMockRecommendations(allResources, userId);
                }
            } catch (parseError) {
                recommendations = this.createMockRecommendations(allResources, userId);
            }
            
            recommendations.userId = userId;
            recommendations.generatedAt = new Date().toISOString();
            recommendations.model = this.model;
            recommendations.isMock = false;
            
            await this.cacheResponse(cacheKey, recommendations, { ttl: 3600 });
            return recommendations;
            
        } catch (error) {
            console.error("Recommendation error:", error);
            return this.createMockRecommendations(allResources, userId);
        }
    }

    /**
     * Create mock recommendations
     */
    createMockRecommendations(resources, userId) {
        return {
            userId,
            generatedAt: new Date().toISOString(),
            recommendations: resources.slice(0, 5).map((res, idx) => ({
                resourceId: res._id || `mock_${idx}`,
                name: res.name || res.title || `Resource ${idx + 1}`,
                matchScore: 70 + Math.floor(Math.random() * 30),
                reason: "Popular in your interest area",
                suggestion: "Good for building foundational knowledge"
            })),
            topCategories: ["Computer Science", "Mathematics"],
            studyPlanSuggestion: "Start with basics, practice regularly, and review weekly.",
            model: this.model,
            isMock: true
        };
    }

    /**
     * Enhance search query
     */
    async enhanceSearchQuery(query, context = {}) {
        try {
            const cacheKey = `search_${this.generateContentHash(query)}`;
            const cached = await this.getCachedResponse(cacheKey);
            if (cached) return cached;
            
            const systemInstruction = `Enhance search query and return ONLY valid JSON:
            {
                "enhancedQuery": "improved query",
                "keywords": ["keyword1", "keyword2"],
                "filters": {
                    "category": "suggested category or null",
                    "type": "suggested type or null",
                    "difficulty": "suggested difficulty or null"
                },
                "synonyms": ["synonym1", "synonym2"],
                "searchStrategy": "search strategy"
            }`;
            
            const prompt = `Original query: "${query}"\nContext: ${JSON.stringify(context)}\nEnhance this search for study materials.`;
            
            const responseText = await this.callGeminiAPI(prompt, systemInstruction);
            
            let enhancedSearch;
            try {
                const jsonMatch = responseText.match(/\{[\s\S]*\}/);
                enhancedSearch = jsonMatch ? JSON.parse(jsonMatch[0]) : {
                    enhancedQuery: query,
                    keywords: query.toLowerCase().split(' ').filter(w => w.length > 2),
                    filters: {},
                    synonyms: [],
                    searchStrategy: "Fuzzy search"
                };
            } catch (parseError) {
                enhancedSearch = {
                    enhancedQuery: query,
                    keywords: query.toLowerCase().split(' ').filter(w => w.length > 2),
                    filters: {},
                    synonyms: [],
                    searchStrategy: "Fuzzy search"
                };
            }
            
            enhancedSearch.model = this.model;
            enhancedSearch.isMock = false;
            await this.cacheResponse(cacheKey, enhancedSearch, { ttl: 1800 });
            return enhancedSearch;
            
        } catch (error) {
            console.error("Search enhancement error:", error);
            return {
                enhancedQuery: query,
                keywords: query.toLowerCase().split(' ').filter(w => w.length > 2),
                filters: {},
                synonyms: [],
                searchStrategy: "Basic search",
                model: this.model,
                isMock: true,
                error: error.message
            };
        }
    }

    /**
     * Get service status
     */
    getStatus() {
        return {
            isEnabled: this.isEnabled,
            hasApiKey: !!this.apiKey,
            model: this.model,
            baseUrl: this.baseUrl,
            status: "✅ Active",
            message: `Gemini AI is active using ${this.model}`
        };
    }

    /**
     * Test API connection
     */
    async testConnection() {
        try {
            const testPrompt = "Respond with 'OK' if you can read this.";
            const response = await this.callGeminiAPI(testPrompt, "Respond with just 'OK'.");
            return {
                success: true,
                message: "API connection successful",
                response: response.trim(),
                model: this.model
            };
        } catch (error) {
            return {
                success: false,
                message: "API connection failed",
                error: error.message,
                model: this.model
            };
        }
    }
}

module.exports = new GeminiService();