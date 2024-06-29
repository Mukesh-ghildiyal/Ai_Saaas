
import React from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Structure = () => {
    const location = useLocation();
  const query = new URLSearchParams(location.search).get('query');

    const navigate = useNavigate();
  const handleSubmit = () => {
    navigate('/blogging');
  };

  return (
    <div className="min-h-screen bg-black text-white py-10">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Topic - Blogging</h1>
        <p className="text-orange-500 mb-6">
          Here’s how your content learning structure should be. You can Add/Edit/Remove any topics/subtopics to best fit your customized learning.
        </p>
        <ul className="space-y-6">
          {[
            {
              title: 'Introduction to Blogging',
              subtopics: ['What is a Blog?', 'History of Blogging', 'Benefits of Blogging']
            },
            {
              title: 'Getting Started',
              subtopics: ['Choosing a Niche', 'Understanding Your Audience', 'Defining Your Blog’s Purpose']
            },
            {
              title: 'Setting Up Your Blog',
              subtopics: ['Selecting a Blogging Platform (e.g., WordPress, Blogger, Wix)', 'Choosing a Domain Name', 'Selecting Web Hosting']
            },
            {
              title: 'Blog Design and Layout',
              subtopics: ['Choosing a Theme', 'Customizing Your Blog’s Appearance', 'Importance of Responsive Design']
            },
            {
              title: 'Creating Content',
              subtopics: ['Writing Your First Blog Post', 'Blog Post Structure', 'Basic SEO Practices', 'Using Images and Multimedia']
            },
            {
              title: 'Publishing and Promotion',
              subtopics: ['Publishing Your Blog Post', 'Sharing on Social Media', 'Basic Analytics (e.g., Google Analytics)']
            },
            {
              title: 'Content Development',
              subtopics: ['Content Planning and Strategy', 'Creating a Content Calendar', 'Guest Blogging']
            }
          ].map((topic, index) => (
            <li key={index} className="bg-gray-800 p-4 rounded-lg">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-bold">{index + 1}. {topic.title}</h2>
                <div className="space-x-2">
                  <button className="bg-white text-black p-1 rounded-full">✏️</button>
                  <button className="bg-white text-black p-1 rounded-full">➕</button>
                  <button className="bg-white text-black p-1 rounded-full">🗑️</button>
                </div>
              </div>
              <ul className="ml-4 list-disc list-inside space-y-1">
                {topic.subtopics.map((subtopic, subIndex) => (
                  <li key={subIndex}>{subtopic}</li>
                ))}
              </ul>
              <button className="text-orange-500 mt-2">add more</button>
            </li>
          ))}
        </ul>
        <div className="flex justify-center mt-8">
          <button onClick={handleSubmit} className="bg-orange-500 text-white px-6 py-2 rounded-full">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Structure;
