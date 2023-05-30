import React from 'react';
import profilepicture from "../assets/profilepic.jpg"

const AboutMe = () => {
  return (
    <section className="bg-gray-900 text-white py-16 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-center justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 bg-gray-800 rounded-full overflow-hidden">
            <img
                src={profilepicture}
                alt="Carson Barnes"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Hey, I'm Carson.</h1>
            <p className="text-lg md:text-xl mb-8 font-[Monospace]">
            As a graduate with a BFA in experimental media, I have honed my skills in creative thinking and 
            possess a deep appreciation for the collaborative intricacies of technical work.  
            My natural curiosity and love for problem-solving led me to pursue software development, 
            and I am currently finishing a full-stack bootcamp at Georgia Tech. My goal is to create dynamic and accessible 
            web applications that captivate users with engaging design and functionality. I am eager to join a forward-thinking 
            team that values innovation, learning, and collaboration.
            </p>
            <a href="#Contact"
	        class="group relative inline-block overflow-hidden rounded border border-gray-100 bg-gray-200  px-12 py-3 text-2xl text-center font-[Monospace] text-slate-800 hover:text-teal-600 focus:outline-none focus:ring active:bg-indigo-600 active:text-white">
	            <span class="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-teal-600 transition-all duration-200 group-hover:w-full"></span>
	            <span class="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-teal-600 transition-all duration-200 group-hover:h-full"></span>
	            <span class="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-teal-600 transition-all duration-200 group-hover:w-full"></span>
	            <span class="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-teal-600 transition-all duration-200 group-hover:h-full"></span>
	            Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;