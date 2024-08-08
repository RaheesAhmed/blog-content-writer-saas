"use client";
import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FiFeather, FiBarChart2, FiFileText, FiArrowRight, FiClock, FiTrendingUp, FiBook } from 'react-icons/fi';

const HomePage: React.FC = () => {
  const [topic, setTopic] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.location.href = `/generate?topic=${encodeURIComponent(topic)}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-black text-white">
      <Head>
        <title>AI Blog Writer - Revolutionize Your Content Creation</title>
        <meta name="description" content="Elevate your blogging with AI-powered assistance. Create professional, educational, and engaging content effortlessly." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-16">
        <header className="text-center mb-20">
          <h1 className="text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            AI Blog Writer
          </h1>
          <p className="text-3xl text-blue-200 mb-10 max-w-3xl mx-auto">
            Unleash the power of AI to craft compelling, professional, and educational blog posts in minutes
          </p>
          <div className="flex justify-center space-x-6">
            <Link href="/article" className="px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors font-semibold text-lg">
              Get Started
            </Link>
            <Link href="#learn-more" className="px-8 py-4 bg-transparent border-2 border-blue-400 text-blue-400 rounded-full hover:bg-blue-400 hover:text-white transition-colors font-semibold text-lg">
              Learn More
            </Link>
          </div>
        </header>



        <section id="learn-more" className="mb-24">
          <h2 className="text-5xl font-bold text-center mb-16">Revolutionize Your Blogging Process</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: FiFeather, title: 'Intelligent Outlines', description: 'Our AI crafts structured, comprehensive outlines tailored to your topic, providing a solid foundation for your blog posts.' },
              { icon: FiBarChart2, title: 'Data-Driven Insights', description: 'Enhance your content with relevant statistics and data points, automatically sourced and integrated to support your arguments.' },
              { icon: FiFileText, title: 'Full Article Drafts', description: 'Generate complete, well-researched article drafts that you can refine and personalize, saving hours of writing time.' },
              { icon: FiClock, title: 'Time-Saving Efficiency', description: 'Reduce your content creation time by up to 70%, allowing you to focus on strategy and engagement.' },
              { icon: FiTrendingUp, title: 'SEO Optimization', description: 'Our AI incorporates SEO best practices, helping your content rank higher and reach a wider audience.' },
              { icon: FiBook, title: 'Continuous Learning', description: 'The more you use AI Blog Writer, the better it understands your style and preferences, delivering increasingly tailored content.' },
            ].map((feature, index) => (
              <div key={index} className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-xl p-8 transform hover:scale-105 transition-all duration-300">
                <feature.icon className="text-5xl text-blue-400 mb-6" />
                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-blue-200 text-lg">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-4xl mx-auto text-center mb-24">
          <h2 className="text-4xl font-bold mb-8">Why Choose AI Blog Writer?</h2>
          <p className="text-xl text-blue-200 mb-12">
            In today's fast-paced digital landscape, creating high-quality, engaging blog content consistently can be challenging.
            AI Blog Writer is designed to streamline your content creation process, combining the efficiency of artificial intelligence
            with your unique voice and expertise. Whether you're a seasoned blogger, a busy professional, or just starting your
            content journey, our tool empowers you to produce professional-grade articles with ease.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-xl p-8">
              <h3 className="text-2xl font-semibold mb-4">For Bloggers</h3>
              <p className="text-blue-200">
                Overcome writer's block, maintain a consistent posting schedule, and explore new topics with confidence.
                Our AI assistant helps you generate fresh ideas and well-structured content, allowing you to focus on adding
                your personal touch and engaging with your audience.
              </p>
            </div>
            <div className="bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-xl p-8">
              <h3 className="text-2xl font-semibold mb-4">For Businesses</h3>
              <p className="text-blue-200">
                Enhance your content marketing strategy without expanding your team. AI Blog Writer enables you to
                produce high-quality, SEO-optimized content consistently, helping you establish thought leadership
                and drive organic traffic to your website.
              </p>
            </div>
          </div>
        </section>

        <section className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-8">Ready to Transform Your Content Creation?</h2>
          <p className="text-xl text-blue-200 mb-10 max-w-3xl mx-auto">
            Join thousands of content creators who have already revolutionized their blogging process with AI Blog Writer.
            Start creating compelling, professional-quality content today.
          </p>
          <Link href="/article" className="inline-block px-12 py-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 font-semibold text-2xl">
            Start Writing Now
          </Link>
        </section>
      </main>

      <footer className="text-center py-12 bg-gray-900">
        <p className="text-gray-400 mb-4">&copy; 2024 AI Blog Writer. All rights reserved.</p>
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-blue-400 hover:text-blue-300">Terms of Service</a>
          <a href="#" className="text-blue-400 hover:text-blue-300">Privacy Policy</a>
          <a href="#" className="text-blue-400 hover:text-blue-300">Contact Us</a>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;