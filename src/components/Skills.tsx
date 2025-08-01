import React from 'react';
import { Code2, Database, Globe, Smartphone, Server, Palette } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code2 size={32} />,
      title: 'Finance & Accounting',
  skills: [
    { name: 'Financial Reporting & Analysis', level: 90 },
    { name: 'Income Tax Computation & Filing', level: 88 },
    { name: 'GST Return Preparation & Filing', level: 85 },
    { name: 'Direct & Indirect Taxation', level: 87 },
    { name: 'Tally Prime', level: 85 },
    { name: 'QuickBooks', level: 80 }
  ]
    },
    {
      icon: <Server size={32} />,
      title: 'Tools & Software',
  skills: [
    { name: 'Microsoft Excel', level: 92 },
    { name: 'Canva', level: 80 },
    { name: 'Google Sheets', level: 85 },
    { name: 'Tax Filing Platforms', level: 85 },
    { name: 'Document Review', level: 85 }
  ]
    },
    {
      icon: <Palette size={32} />,
      title: 'Soft Skills & Internships',
  skills: [
    { name: 'Attention to Detail', level: 95 },
    { name: 'Communication & Teamwork', level: 90 },
    { name: 'Client Interaction (Vialto Partners)', level: 88 },
    { name: 'Content Creation (Bhumi)', level: 85 },
    { name: 'Accounting Procedures (S&K Associates)', level: 87 },
    { name: 'Time Management', level: 90 }
  ]
}
  ];

  const getSkillColor = (level: number) => {
    if (level >= 90) return 'from-green-500 to-emerald-500';
    if (level >= 80) return 'from-blue-500 to-cyan-500';
    if (level >= 70) return 'from-yellow-500 to-orange-500';
    return 'from-red-500 to-pink-500';
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
           A comprehensive overview of my professional skills and proficiency levels across core areas of finance, taxation, accounting tools, and workplace competencies developed through hands-on internship experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-blue-600">
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-gray-500 text-sm font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`bg-gradient-to-r ${getSkillColor(skill.level)} h-2 rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Additional Skills</h3>
          <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
            {[
             'Tax Planning',
'Financial Analysis',
'Client Interaction',
'Regulatory Compliance',
'Return Filing',
'Team Collaboration',
'Data Accuracy',
'Presentation Skills',
'Time Management',
'Accounting Software',
'Digital Documentation',
'Financial Reporting',
'Content Creation',
'Campaign Management',
'Audit Assistance',
'Professional Communication'
            ].map((skill, index) => (
              <span key={index} className="px-4 py-2 bg-gradient-to-r from-blue-50 to-teal-50 text-blue-700 rounded-full text-sm font-medium hover:shadow-md transition-shadow duration-200">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;