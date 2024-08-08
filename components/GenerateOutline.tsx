"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';

const GenerateOutline: React.FC = () => {
    const [topic, setTopic] = useState('');
    const [outline, setOutline] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulating AI-generated outline
        setOutline(`1. Introduction
  1.1 Background on ${topic}
  1.2 Importance of the topic
2. Main Point 1
  2.1 Subtopic A
  2.2 Subtopic B
3. Main Point 2
  3.1 Subtopic C
  3.2 Subtopic D
4. Main Point 3
  4.1 Subtopic E
  4.2 Subtopic F
5. Conclusion
  5.1 Recap of main points
  5.2 Call to action`);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white p-6">
            <Link href="/dashboard" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8">
                <FiArrowLeft className="mr-2" /> Back to Dashboard
            </Link>

            <h1 className="text-4xl font-bold mb-8">Generate Outline</h1>

            <form onSubmit={handleSubmit} className="mb-8">
                <input
                    type="text"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    placeholder="Enter your blog topic"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white mb-4"
                />
                <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    Generate Outline
                </button>
            </form>

            {outline && (
                <div className="bg-gray-800 p-6 rounded-lg">
                    <h2 className="text-2xl font-semibold mb-4">Generated Outline:</h2>
                    <pre className="whitespace-pre-wrap">{outline}</pre>
                </div>
            )}
        </div>
    );
};

export default GenerateOutline;