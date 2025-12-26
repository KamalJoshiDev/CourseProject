// src/components/GeminiStats.jsx
import React, { useState, useEffect } from 'react';

const GeminiStats = () => {
    const [stats, setStats] = useState({
        totalAnalyzed: 0,
        plagiarismChecks: 0,
        recommendations: 0,
        avgQualityScore: 0
    });

    useEffect(() => {
        // Fetch Gemini stats from your backend
        const fetchStats = async () => {
            try {
                const response = await fetch('http://localhost:6800/api/v1/ai/stats');
                const data = await response.json();
                setStats(data.data);
            } catch (error) {
                console.error('Error fetching AI stats:', error);
            }
        };
        
        fetchStats();
    }, []);

    return (
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-6 text-white shadow-lg">
            <h3 className="text-lg font-bold mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
                Gemini AI Insights
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
                    <div className="text-2xl font-bold">{stats.totalAnalyzed}</div>
                    <div className="text-sm opacity-90">Resources Analyzed</div>
                </div>
                
                <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
                    <div className="text-2xl font-bold">{stats.plagiarismChecks}</div>
                    <div className="text-sm opacity-90">Plagiarism Checks</div>
                </div>
                
                <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
                    <div className="text-2xl font-bold">{stats.recommendations}</div>
                    <div className="text-sm opacity-90">AI Recommendations</div>
                </div>
                
                <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
                    <div className="text-2xl font-bold">{stats.avgQualityScore.toFixed(1)}/10</div>
                    <div className="text-sm opacity-90">Avg. Quality Score</div>
                </div>
            </div>
        </div>
    );
};

export default GeminiStats;