// src/pages/FAQ.js
import { Link } from 'react-router-dom';
import { useState } from 'react';

const faqs = [
  { question: "How do I register as a seller?", answer: "Go to the Sign Up page and select the option to register as a seller. Fill out the required details and submit your application. Once approved, you can start listing products." },
  { question: "What is your return policy?", answer: "Returns are accepted within 7 days of delivery, provided the product is in original condition. For return requests, visit your orders section and follow the steps." },
  { question: "How do I manage my seller inventory?", answer: "After logging in, navigate to your seller dashboard. Use the inventory section to manage quantities, prices, and upload new products easily." },
  { question: "Are there any selling fees?", answer: "We charge a small commission on successful sales (typically 3-5% depending on category) and a payment processing fee. There are no listing fees or monthly subscription costs. Full fee structure is available in your seller agreement." },
];

const videos = [
  { title: "How to Create a Seller Account", url: "https://www.youtube.com/embed/KVZ-P-ZI6W", duration: "4:32", description: "Step-by-step guide to setting up your seller profile and getting verified." },
  { title: "How to Upload and Manage Products", url: "https://www.youtube.com/embed/P1aQA4bzAtk", duration: "6:15", description: "Learn how to add product listings, upload high-quality photos, and manage your stock." },
  { title: "How to Place an Order as a Buyer", url: "https://www.youtube.com/embed/f1hsAAze6gE", duration: "3:48", description: "Complete walkthrough of the purchasing process, from searching to checkout." },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
        <div className="flex items-center gap-4">
          <span className="text-2xl font-bold text-indigo-700">KalaMitra</span>
          <Link
            to="/"
            className="flex items-center gap-1 px-3 py-2 rounded-lg text-gray-700 border border-gray-200 hover:bg-gray-100 transition-colors text-base"
          >
            <span className="text-lg">🏠</span> Home
          </Link>
          <span className="flex items-center gap-1 px-3 py-2 rounded-lg bg-indigo-100 text-indigo-700 text-base font-semibold">
            <span className="text-lg">❓</span> Help
          </span>
        </div>
      </header>

      {/* Hero/Help Center */}
      <section className="bg-gradient-to-r from-blue-400 to-blue-600 py-16 text-center text-white">
        <div className="text-6xl mb-6">❓</div>
        <h1 className="text-4xl font-bold mb-2">Help Center</h1>
        <p className="mb-8 text-lg">
          Find answers to common questions or browse our video tutorials to get the most out of our platform.
        </p>
        <div className="mx-auto max-w-xl">
          <input
            type="text"
            placeholder="Search help articles..."
            className="w-full py-3 rounded-xl px-5 text-gray-800 outline-none shadow-sm"
          />
        </div>
      </section>

      {/* FAQ Section */}
      <main className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mt-16 mb-4 text-center">Frequently Asked Questions</h2>
        <p className="text-gray-600 mb-8 text-center">
          Quick answers to the most common questions about our platform, buying, selling, and account management.
        </p>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow">
              <button
                onClick={() => handleToggle(idx)}
                className="w-full flex justify-between items-center px-6 py-5 text-left focus:outline-none text-lg font-semibold"
              >
                {faq.question}
                <span>{openIndex === idx ? "▲" : "▼"}</span>
              </button>
              {openIndex === idx && (
                <div className="px-6 pb-5 text-gray-700 text-base animate-fade-in">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* How-To Video Guides */}
        <h3 className="text-3xl font-bold text-center mt-20 mb-2 flex items-center gap-2 justify-center">
          <span role="img" aria-label="video">📹</span> Step-by-Step Video Guides
        </h3>
        <p className="text-center text-gray-600 mb-8">
          Watch step-by-step video tutorials to learn how to use all features of our platform effectively.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {videos.map((video, idx) => (
            <div key={idx} className="rounded-lg overflow-hidden shadow-lg bg-white">
              <iframe
                className="w-full h-48"
                src={video.url}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <div className="p-4">
                <h4 className="font-semibold text-lg mb-1">{video.title}</h4>
                <p className="text-gray-700 text-sm mb-2">{video.description}</p>
                <span className="text-gray-500 text-xs">{video.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default FAQ;
