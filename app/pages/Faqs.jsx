// pages/Faq.js

import { useState } from 'react';
import { FaChevronDown, FaChevronRight } from 'react-icons/fa';

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What services does ThinkParadigm.AI offer?',
      answer:
        'We specialize in software development, app development, website design, SEO optimization, cloud services, AI applications, and social media management.',
    },
    {
      question: 'Why should I choose ThinkParadigm.AI?',
      answer:
        'We stand out for our expertise, timely delivery, competitive pricing, customer-focused approach, and dedicated support.',
    },
    {
      question: 'How long does it take to complete a project?',
      answer:
        'Timelines depend on project complexity, but we ensure on-time delivery with a clear schedule shared upfront.',
    },
    {
      question: 'Do you provide post-project support? ',
      answer:
        'Yes, we offer comprehensive post-deployment support to ensure smooth operation and updates as needed.',
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-full bg-gray-100 py-12 relative z-0">
      <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-blue-600">FAQ&apos;s</h2>
          {/* <p className="text-orange-500 mt-2">Lorem ipsum dolor sit amet</p> */}
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-4 shadow-sm bg-white"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center text-left text-lg font-semibold text-blue-600 focus:outline-none"
              >
                {faq.question}
                {openIndex === index ? (
                  <FaChevronDown className="text-blue-600" />
                ) : (
                  <FaChevronRight className="text-blue-600" />
                )}
              </button>
              {openIndex === index && (
                <div className="mt-2 text-gray-600">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
