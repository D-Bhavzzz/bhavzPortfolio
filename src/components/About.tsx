import React from 'react';
import { Code, Lightbulb, Users, Target } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code size={24} />,
      title: 'Financial Accuracy',
      description: 'Committed to producing precise financial reports and ensuring compliance with regulatory standards'
    },
    {
      icon: <Lightbulb size={24} />,
      title: 'Strategic Thinking',
      description: 'Always exploring innovative approaches to optimize tax planning, budgeting, and financial decision-making'
    },
    {
      icon: <Users size={24} />,
      title: 'Team Collaboration',
      description: 'Strong interpersonal and communication skills developed through working with clients, audit teams, and stakeholders'
    },
    {
      icon: <Target size={24} />,
      title: 'Results-Driven',
      description: 'Focused on delivering high-impact financial solutions that support business growth and efficiency'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I am a B.Com (Professional) graduate with an integrated
 Chartered Accountancy background, offering a solid
 foundation in accounting, finance, and taxation. With strong
 analytical skills and a detail-oriented approach to financial
 and tax problem-solving, I am eager to contribute effectively
 in a dynamic professional environment.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">My Story</h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                My journey into the world of finance and accounting began with a deep interest in understanding how businesses operate and grow. Over time, this curiosity evolved into a committed professional path shaped by academic rigor and practical experience.
              </p>
              <p>
                As a B.Com (Professional) graduate with an integrated Chartered Accountancy background, I’ve built a strong foundation in accounting, finance, and taxation. I’m particularly interested in how financial data can drive strategic decisions, optimize performance, and ensure compliance in dynamic business environments.
              </p>
              <p>
                When I'm not analyzing numbers or solving tax-related challenges, you'll find me exploring intersections between finance and technology, learning about fintech innovations, or mentoring peers in professional development. I believe in continuous learning and sharing knowledge to create value wherever I contribute.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
                <div className="text-blue-600 mb-4">
                  {item.icon}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;