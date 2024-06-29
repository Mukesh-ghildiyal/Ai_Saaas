// src/components/CardSection.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import image1 from "../assets/th.jpg"
import image2 from "../assets/th (1).jpg"
import image3 from "../assets/th (2).jpg"

const Guided = () => {
    const location = useLocation();
  const query = new URLSearchParams(location.search).get('query');
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 m-10">
        <div className="bg-orange-400 text-center p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <img src={image1} alt="Guided" className="mx-auto"/>
          </div>
          <h2 className="text-4xl font-bold mb-4">Guided</h2>
          <p className="text-base">
            Super-friendly AI buddy to guide you creating the best learning plan and content for you to learn what you wish to. Just give your first prompt and follow the instructions.
          </p>
        </div>
        <div className="bg-orange-400 text-center p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <img src={image2} alt="Custom" className="mx-auto"/>
          </div>
          <h2 className="text-4xl font-bold mb-4">Custom</h2>
          <p className="text-base">
            Do you already have some trusted web sources and public videos for our AI buddy to refer to create your custom learning content? Enter all your links and AI will take care of the rest.
          </p>
        </div>
        <div className="bg-orange-400 text-center p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <img src={image3} alt="Top Links" className="mx-auto"/>
          </div>
          <h2 className="text-4xl font-bold mb-4">Top Links</h2>
          <p className="text-base">
            Do you want our AI buddy to suggest top 10 web results and YouTube videos related to any specific topic you have? Just enter the keywords and find the best recommendations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Guided;
