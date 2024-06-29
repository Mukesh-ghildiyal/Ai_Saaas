// src/App.js
import React from 'react';

const Blogging = () => {
 
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Topic - Blogging</h1>
        <p className="mb-8">
          Here's a structured weekly learning plan that covers everything from setting up your blog to monetizing and promoting it. Each week will focus on specific aspects of blogging, ensuring a comprehensive learning experience.
        </p>

        <div>
          <h2 className="text-xl font-semibold mb-2">Week 1: Foundation and Setup</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Day 1: Understanding Blogging Basics</li>
            <li>Day 2: Choosing a Niche</li>
            <li>Day 3: Selecting a Blogging Platform</li>
            <li>Day 4: Domain and Hosting Setup</li>
            <li>Day 5: Theme Selection and Customization</li>
            <li>Day 6: Writing Your First Blog Post</li>
            <li>Day 7: Publishing and Sharing</li>
          </ul>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Week 2: Content Creation</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Day 8: Planning Your Content Calendar</li>
            <li>Day 9-11: Writing Blog Posts</li>
            <li>Day 12: Reviewing and Editing</li>
            <li>Day 13: Publishing and Promoting</li>
            <li>Day 14: Understanding Your Audience</li>
          </ul>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Week 3: Blog Design and Promotion</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Day 15: Advanced Customization</li>
            <li>Day 16: Setting Up Social Media Profiles</li>
            <li>Day 17: Joining Blogging Communities</li>
            <li>Day 18: Engaging on Social Media</li>
            <li>Day 19-21: Building Your Email List</li>
          </ul>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Week 4: Monetization</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Day 22: Researching Ad Networks</li>
            <li>Day 23: Exploring Affiliate Programs</li>
            <li>Day 24: Planning Sponsored Content</li>
            <li>Day 25-27: Developing Products/Services</li>
            <li>Day 28: Creating a Sales Page</li>
          </ul>
        </div>

        <div className="mt-8 text-center">
          <button className="bg-orange-500 text-white px-4 py-2 rounded">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Blogging;
