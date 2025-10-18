import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent mb-4">
              BHAVANA PS
            </h3>
            <p className="text-gray-400 leading-relaxed">
             A finance professional with a Chartered Accountancy background, solving complex financial and tax challenges with precision and insight. I specialize in analytical problem-solving and bring a detail-oriented approach to dynamic business environments..
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Education', 'Experience', 'Skills', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/D-Bhavzzz"
                className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/bhavana-suresh-5a4a47266"
                className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:psbhavana27@gmail.com"
                className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-200"
              >
                <Mail size={20} />
              </a>
            </div>
            <p className="text-gray-400 mt-4">
              <span className="font-medium">Email:</span> psbhavana27@gmail.com
            </p>
            <p className="text-gray-400">
              <span className="font-medium">Phone:</span> +91 8861509324
            </p>
          </div>
        </div>

       
      </div>
    </footer>
  );
};

export default Footer;