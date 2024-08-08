"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { FiArrowLeft, FiCopy } from 'react-icons/fi';
import ReactMarkdown from 'react-markdown';

const GenerateOutline: React.FC = () => {
    const [topic, setTopic] = useState('');
    const [targetAudience, setTargetAudience] = useState('general');
    const [tone, setTone] = useState('neutral');
    const [outline, setOutline] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await fetch('/api/blog/article/outline', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ topic, targetAudience, tone }),
            });
            const data = await response.json();
            setOutline(data.outline);
        } catch (error) {
            console.error('Error generating outline:', error);
            setOutline('An error occurred while generating the outline. Please try again.');
        }
        setIsLoading(false);
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(outline).then(() => {
            alert('Outline copied to clipboard!');
        }, (err) => {
            console.error('Could not copy text: ', err);
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white p-6">
            <Link href="/dashboard" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8">
                <FiArrowLeft className="mr-2" /> Back to Dashboard
            </Link>

            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold mb-8 text-center">Generate Outline</h1>

                <form onSubmit={handleSubmit} className="mb-8 space-y-6">
                    <div className="relative">
                        <input
                            type="text"
                            value={topic}
                            onChange={(e) => setTopic(e.target.value)}
                            placeholder="Enter your blog topic"
                            className="w-full px-4 py-2 bg-gray-800 border-b-2 border-gray-600 focus:border-blue-500 outline-none transition-colors text-white text-lg"
                        />
                        <label className="absolute left-0 -top-6 text-blue-400 text-sm">Blog Topic</label>
                    </div>

                    <div className="flex space-x-4">
                        <div className="relative flex-1">
                            <select
                                value={targetAudience}
                                onChange={(e) => setTargetAudience(e.target.value)}
                                className="w-full px-4 py-2 bg-gray-800 border-b-2 border-gray-600 focus:border-blue-500 outline-none transition-colors text-white"
                            >
                                <option value="general">General</option>
                                <option value="professional">Professional</option>
                                <option value="academic">Academic</option>
                                <option value="technical">Technical</option>
                            </select>
                            <label className="absolute left-0 -top-6 text-blue-400 text-sm">Target Audience</label>
                        </div>

                        <div className="relative flex-1">
                            <select
                                value={tone}
                                onChange={(e) => setTone(e.target.value)}
                                className="w-full px-4 py-2 bg-gray-800 border-b-2 border-gray-600 focus:border-blue-500 outline-none transition-colors text-white"
                            >
                                <option value="neutral">Neutral</option>
                                <option value="formal">Formal</option>
                                <option value="casual">Casual</option>
                                <option value="optimistic">Optimistic</option>
                                <option value="critical">Critical</option>
                            </select>
                            <label className="absolute left-0 -top-6 text-blue-400 text-sm">Tone</label>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold"
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <div className="flex items-center justify-center">
                                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-2"></div>
                                Generating...
                            </div>
                        ) : (
                            'Generate Outline'
                        )}
                    </button>
                </form>

                {outline && (
                    <div className="bg-gray-800 p-6 rounded-lg relative">
                        <h2 className="text-2xl font-semibold mb-4">Generated Outline:</h2>
                        <button
                            onClick={copyToClipboard}
                            className="absolute top-4 right-4 text-blue-400 hover:text-blue-300"
                            title="Copy to clipboard"
                        >
                            <FiCopy size={20} />
                        </button>
                        <div className="prose prose-invert max-w-none">
                            <ReactMarkdown>{outline}</ReactMarkdown>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default GenerateOutline;