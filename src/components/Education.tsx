import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: 'Bachelors of Commerce- CA integrated',
      institution: ' CMR University',
      location: 'Bengaluru, India',
      duration: '2022 - 2025',
      gpa: '8.43',
      achievements: [
        'Consistently ranked among the top performers during B.Com (Professional) program',
        'Successfully cleared key levels of the Chartered Accountancy course with strong academic standing',
        'Recognized for excellence in Accounting, Taxation, and Financial Managemen'
      ],
      coursework: [
        'Financial Reporting & Analysis',
        'Income Tax Computation & Filing',
        'GST Return Preparation & Filing',
        'Direct & Indirect Taxation',
        'Accounting Software: Tally Prime, QuickBooks',
        'Auditing Principles & Standards'
      ]
    },
    {
      degree: 'PU-CEBA(Computer Science,Economics,Business,Accounts)',
      institution: 'Indiranagar Pre-university college',
      location: 'Bengaluru, India',
      duration: '2020 - 2022',
      gpa: '87.17%',
      achievements: [
        'Secured Distinction in Accountancy and Business Studies',
        'Assisted teachers in organizing commerce exhibitions',
        'Scored above 90 in Accountancy and Economics'
      ],
      coursework: [
        'Advanced Computer Science',
        'Advanced Economics',
        'Advanced Accounts',
        'Advanced Business'
      ]
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            My educational journey has provided me with a strong foundation in Accounting 
            , Tax and Finance.
          </p>
        </div>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-teal-100 rounded-full flex items-center justify-center">
                    <GraduationCap className="text-blue-600" size={32} />
                  </div>
                </div>

                <div className="flex-grow">
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{edu.degree}</h3>
                      <h4 className="text-xl font-semibold text-blue-600 mb-2">{edu.institution}</h4>
                    </div>
                    <div className="flex flex-col lg:items-end text-gray-600">
                      <div className="flex items-center gap-2 mb-1">
                        <Calendar size={16} />
                        <span className="font-medium">{edu.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 mb-1">
                        <MapPin size={16} />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award size={16} />
                        <span className="font-semibold">GPA: {edu.gpa}</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="text-lg font-semibold text-gray-900 mb-3">Key Achievements</h5>
                      <ul className="space-y-2">
                        {edu.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h5 className="text-lg font-semibold text-gray-900 mb-3">Relevant Coursework</h5>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course, i) => (
                          <span key={i} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                            {course}
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

export default Education;