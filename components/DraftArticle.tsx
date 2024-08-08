"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { FiArrowLeft, FiSettings, FiCopy } from 'react-icons/fi';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

const DraftArticle: React.FC = () => {
    const [topic, setTopic] = useState('');
    const [articleType, setArticleType] = useState('informative');
    const [targetAudience, setTargetAudience] = useState('general');
    const [wordCount, setWordCount] = useState(500);
    const [tone, setTone] = useState('neutral');
    const [article, setArticle] = useState('');
    const [showAdvancedSettings, setShowAdvancedSettings] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await fetch('http://localhost:3000/api/blog/write', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    topic,
                    articleType,
                    targetAudience,
                    wordCount,
                    tone,
                }),
            });
            const data = await response.json();
            console.log(data);
            setArticle(data.article);
        } catch (error) {
            console.error('Error generating article:', error);
            setArticle('An error occurred while generating the article. Please try again.');
        }
        setIsLoading(false);
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(article).then(() => {
            alert('Article copied to clipboard!');
        }, (err) => {
            console.error('Could not copy text: ', err);
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white p-6">
            <Link href="/dashboard" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8">
                <FiArrowLeft className="mr-2" /> Back to Dashboard
            </Link>

            <h1 className="text-4xl font-bold mb-12 text-center">Draft Full Article</h1>

            <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
                <form onSubmit={handleSubmit} className="lg:w-1/2 space-y-8">
                    <div className="relative">
                        <input
                            type="text"
                            value={topic}
                            onChange={(e) => setTopic(e.target.value)}
                            placeholder="Enter your article topic"
                            className="w-full px-4 py-2 bg-gray-800 border-b-2 border-gray-600 focus:border-blue-500 outline-none transition-colors text-white text-lg"
                        />
                        <label className="absolute left-0 -top-6 text-blue-400 text-sm">Article Topic</label>
                    </div>

                    <div className="flex space-x-4">
                        <div className="relative flex-1">
                            <select
                                value={articleType}
                                onChange={(e) => setArticleType(e.target.value)}
                                className="w-full px-4 py-2 bg-gray-800 border-b-2 border-gray-600 focus:border-blue-500 outline-none transition-colors text-white"
                            >
                                <option value="informative">Informative</option>
                                <option value="persuasive">Persuasive</option>
                                <option value="howto">How-To Guide</option>
                                <option value="listicle">Listicle</option>
                                <option value="comparison">Comparison</option>
                            </select>
                            <label className="absolute left-0 -top-6 text-blue-400 text-sm">Article Type</label>
                        </div>

                        <div className="relative flex-1">
                            <select
                                value={targetAudience}
                                onChange={(e) => setTargetAudience(e.target.value)}
                                className="w-full px-4 py-2 bg-gray-800 border-b-2 border-gray-600 focus:border-blue-500 outline-none transition-colors text-white"
                            >
                                <option value="general">General Audience</option>
                                <option value="professional">Professional</option>
                                <option value="academic">Academic</option>
                                <option value="technical">Technical</option>
                            </select>
                            <label className="absolute left-0 -top-6 text-blue-400 text-sm">Target Audience</label>
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={() => setShowAdvancedSettings(!showAdvancedSettings)}
                        className="flex items-center text-blue-400 hover:text-blue-300"
                    >
                        <FiSettings className="mr-2" />
                        {showAdvancedSettings ? 'Hide' : 'Show'} Advanced Settings
                    </button>

                    {showAdvancedSettings && (
                        <div className="space-y-6">
                            <div className="relative">
                                <input
                                    type="number"
                                    value={wordCount}
                                    onChange={(e) => setWordCount(Number(e.target.value))}
                                    min="100"
                                    max="2000"
                                    step="100"
                                    className="w-full px-4 py-2 bg-gray-800 border-b-2 border-gray-600 focus:border-blue-500 outline-none transition-colors text-white"
                                />
                                <label className="absolute left-0 -top-6 text-blue-400 text-sm">Word Count</label>
                            </div>
                            <div className="relative">
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
                    )}

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
                            'Generate Article'
                        )}
                    </button>
                </form>

                <div className="lg:w-1/2">
                    {article ? (
                        <div className="bg-gray-800 p-6 rounded-lg relative">
                            <h2 className="text-2xl font-semibold mb-4">Generated Article:</h2>
                            <button
                                onClick={copyToClipboard}
                                className="absolute top-4 right-4 text-blue-400 hover:text-blue-300"
                                title="Copy to clipboard"
                            >
                                <FiCopy size={20} />
                            </button>
                            <div className="prose prose-invert max-w-none">
                                <ReactMarkdown
                                    components={{
                                        code({ node, inline, className, children, ...props }) {
                                            const match = /language-(\w+)/.exec(className || '')
                                            return !inline && match ? (
                                                <SyntaxHighlighter
                                                    style={tomorrow}
                                                    language={match[1]}
                                                    PreTag="div"
                                                    {...props}
                                                >
                                                    {String(children).replace(/\n$/, '')}
                                                </SyntaxHighlighter>
                                            ) : (
                                                <code className={className} {...props}>
                                                    {children}
                                                </code>
                                            )
                                        }
                                    }}
                                >
                                    {article}
                                </ReactMarkdown>
                            </div>
                        </div>
                    ) : (
                        <div className="bg-gray-800 p-6 rounded-lg h-full flex items-center justify-center text-gray-400">
                            Your generated article will appear here
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DraftArticle;