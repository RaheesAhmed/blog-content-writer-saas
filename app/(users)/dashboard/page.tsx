"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { FiFeather, FiBarChart2, FiFileText, FiList, FiEdit, FiTrendingUp, FiHome, FiMenu } from 'react-icons/fi';

const DashboardPage: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const features = [
        { icon: FiHome, title: 'Dashboard Overview', link: '/dashboard' },
        { icon: FiFeather, title: 'Draft Full Article', link: '/article' },
        { icon: FiBarChart2, title: 'Generate Outline', link: '/outline' },
        { icon: FiFileText, title: 'Suggest Statics', link: '/suggest' },
        { icon: FiList, title: 'Topic Ideas', link: '/topic-ideas' },
        { icon: FiEdit, title: 'Content Editor', link: '/content-editor' },
        { icon: FiTrendingUp, title: 'SEO Optimizer', link: '/seo-optimizer' },
    ];

    return (
        <div className="flex h-screen bg-gray-900">
            {/* Sidebar */}
            <div className={`bg-gray-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0 transition duration-200 ease-in-out`}>
                <Link href="/dashboard" className="text-white flex items-center space-x-2 px-4">
                    <FiFeather className="h-8 w-8" />
                    <span className="text-2xl font-extrabold">AI Blog Writer</span>
                </Link>
                <nav>
                    {features.map((item, index) => (
                        <Link key={index} href={item.link} className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
                            <item.icon className="inline-block mr-2" /> {item.title}
                        </Link>
                    ))}
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                {/* Topbar */}
                <header className="bg-gray-800 text-white shadow-md">
                    <div className="flex items-center justify-between p-4">
                        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="md:hidden">
                            <FiMenu className="h-6 w-6" />
                        </button>
                        <h2 className="text-xl font-semibold">Dashboard</h2>
                        <div className="flex items-center">
                            <span className="text-sm mr-2">Welcome, User!</span>
                            <img className="h-8 w-8 rounded-full" src="https://via.placeholder.com/150" alt="User avatar" />
                        </div>
                    </div>
                </header>

                {/* Dashboard Content */}
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gradient-to-br from-gray-900 via-blue-900 to-black p-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.slice(1).map((feature, index) => (
                            <Link href={feature.link} key={index}>
                                <div className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-xl p-6 h-full transform hover:scale-105 transition-all duration-300 cursor-pointer">
                                    <feature.icon className="text-3xl text-blue-400 mb-4" />
                                    <h2 className="text-xl font-semibold mb-2 text-white">{feature.title}</h2>
                                    <p className="text-blue-200 text-sm">Click to access this feature</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default DashboardPage;