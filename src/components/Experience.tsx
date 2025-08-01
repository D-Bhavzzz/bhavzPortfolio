import React from 'react';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: ' Tax Intern ',
      company: 'Vialto Partners',
      location: 'Bengaluru, India',
      duration: 'Current',
      type: 'Internship',
      description: 'Working as a Tax Intern at Vialto Partners, assisting in the preparation and filing of income tax returns for global clients.',
      achievements: [
          'Verified and organized client-provided financial data for tax filing accuracy',
  'Ensured compliance with Indian and international tax regulations',
  'Supported timely and accurate filing of income tax returns across multiple jurisdictions',
  'Collaborated with senior tax associates to resolve client queries and documentation issues'

      ],
      technologie: ['Tax Document Verification', '', 'Income Tax Return Preparation', 'Filing Support for Global Clients', 'Attention to Accuracy in Financial Data'],
      website: 'https://r.search.yahoo.com/_ylt=Awr1TdTjxIxo_gEArw.7HAx.;_ylu=Y29sbwNzZzMEcG9zAzEEdnRpZAMEc2VjA3Ny/RV=2/RE=1755265507/RO=10/RU=https%3a%2f%2fvialtopartners.com%2fcontact-us/RK=2/RS=pvklcG8Eu8Of6iEozXaY9iiXwKA-'
    },
    {
      title: 'Taxation and Accounting Intern',
      company: 'S&K Associates',
      location: 'Bengaluru, India',
      duration: '2024',
      type: 'Internship',
      description: 'A one-month internship at a CA firm, where I gained hands-on experience in taxation and accounting. My responsibilities included preparing tax returns, financial statements, and assisting in both direct and indirect taxation processes, such as income tax and GST.',
      achievements: [
        'Prepared and reviewed individual and business income tax returns',
    'Assisted in GST return filing and compliance documentation',
    'Compiled and finalized basic financial statements using Tally Prime',
    'Worked under senior CAs to understand real-time audit and tax practices'
      ],
      technologie: ['Income Tax Filing', 'GST Return Preparation', 'Tally Prime', 'Financial Statement Preparation', 'Basic Audit Procedures'],
      website: 'https://skgroupsindia.com/s-k-associates/'
    },
    {
      title: 'Marketing Intern',
      company: 'Bhumi Organization',
      location: 'Bengaluru, India',
      duration: '2023',
      type: 'Internship',
      description: 'As a Social Media Marketing Intern at Bhumi Organization, I managed the NGO’s social media platforms, created content, and developed campaigns to boost engagement and raise awareness. I also analyzed performance metrics to improve outreach and support the organization’s mission.',
      achievements: [
         'Managed daily posts and stories across Instagram and Facebook',
    'Increased follower engagement by 30% through targeted campaigns',
    'Designed visually engaging graphics for campaigns using Canva',
    'Monitored analytics to assess campaign performance and optimize strategy'
      ],
      technologie: ['Social Media Management', 'Content Creation', 'Campaign Planning', 'Canva', 'Performance Analytics'],
      website: 'https://www.bhumi.ngo/about-us'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Internships</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            My internship experience has equipped me with practical skills and real-world knowledge in accounting, taxation, and collaborative work environments.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-50 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-red-100 rounded-full flex items-center justify-center">
                    <Briefcase className="text-orange-600" size={32} />
                  </div>
                </div>

                <div className="flex-grow">
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="text-xl font-semibold text-blue-600">{exp.company}</h4>
                        <a 
                          href={exp.website} 
                          className="text-gray-400 hover:text-blue-600 transition-colors duration-200"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink size={16} />
                        </a>
                      </div>
                    </div>
                    <div className="flex flex-col lg:items-end text-gray-600">
                      <div className="flex items-center gap-2 mb-1">
                        <Calendar size={16} />
                        <span className="font-medium">{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 mb-1">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">{exp.description}</p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="text-lg font-semibold text-gray-900 mb-3">Key Achievements</h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h5 className="text-lg font-semibold text-gray-900 mb-3">Skills Gained</h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologie.map((tech, i) => (
                          <span key={i} className="px-3 py-1 bg-orange-50 text-orange-700 rounded-full text-sm font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;