"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';

const SuggestStatistics: React.FC = () => {
    const [topic, setTopic] = useState('');
    const [statistics, setStatistics] = useState<string[]>([]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulating AI-generated statistics
        setStatistics([
            "72% of people believe that " + topic + " will significantly impact their lives in the next 5 years.",
            "The global market for " + topic + " is expected to reach $500 billion by 2025.",
            "Studies show that implementing " + topic + " can increase productivity by up to 35%.",
            "9 out of 10 industry experts recommend adopting " + topic + " for future-proofing businesses.",
        ]);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white p-6">
            <Link href="/dashboard" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8">
                <FiArrowLeft className="mr-2" /> Back to Dashboard
            </Link>

            <h1 className="text-4xl font-bold mb-8">Suggest Statistics</h1>

            <form onSubmit={handleSubmit} className="mb-8">
                <input
                    type="text"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    placeholder="Enter your blog topic"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white mb-4"
                />
                <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    Get Statistics
                </button>
            </form>

            {statistics.length > 0 && (
                <div className="bg-gray-800 p-6 rounded-lg">
                    <h2 className="text-2xl font-semibold mb-4">Suggested Statistics:</h2>
                    <ul className="list-disc pl-5 space-y-2">
                        {statistics.map((stat, index) => (
                            <li key={index}>{stat}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default SuggestStatistics;