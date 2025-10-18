import React from 'react';
import { Download, Mail, Github, Linkedin } from 'lucide-react';
import mineImage from '../assets/mine.jpg';



const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-teal-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="block text-gray-900">Hello, I'm</span>
              <span className="block bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Bhavana PS
              </span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 leading-relaxed max-w-2xl">
              I am a B.Com (Professional) graduate with an integrated Chartered Accountancy background, offering a solid foundation in accounting, finance, and taxation. With strong analytical skills and a detail-oriented approach to financial and tax problem-solving, I am eager to contribute effectively in a dynamic professional environment.
            </p>
            
          

            <div className="mt-8 flex gap-6 justify-center lg:justify-start">
              <a href="https://github.com/D-Bhavzzz" className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-200 text-gray-600 hover:text-blue-600">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/bhavana-suresh-5a4a47266" className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-200 text-gray-600 hover:text-blue-600">
                <Linkedin size={24} />
              </a>
              <a href="mailto:psbhavana27@gmail.com" className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-200 text-gray-600 hover:text-blue-600">
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-100 to-teal-100 rounded-full flex items-center justify-center shadow-2xl">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-100 to-teal-100 rounded-full flex items-center justify-center shadow-2xl">
  <div className="w-72 h-72 bg-white rounded-full flex items-center justify-center border-4 border-white shadow-inner">
    <div className="w-64 h-64 rounded-full overflow-hidden">
      <img
        src={mineImage}
        alt="Profile"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
</div>

              </div>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange-500 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-teal-500 rounded-full animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;