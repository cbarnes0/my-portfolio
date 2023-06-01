import React from 'react';

const Contact = () => {
  return (
    <div id='contact' className='w-full min-h-screen bg-gradient-to-b from-gray-700 to-gray-900 flex justify-center items-center p-4 pt-32'>
      <form method='POST' action='https://getform.io/f/37fe3a24-4b0a-451a-9bf9-2206ccef4431' className='flex flex-col max-w-[600px] w-full mb-16'>
        <div className='pb-2 mt-4'>
          <p className='text-4xl md:text-6xl font-bold inline border-b-4 border-gray-900 text-white'>Contact</p>
          <p className='py-4 text-lg md:text-xl text-white font-[Monospace]'>// Let's get in touch! Please submit the form below or shoot me an email - carsonbarnes98@gmail.com</p>
        </div>
        <input className='bg-gray-700 p-2 text-white' type='text' placeholder='Name' name='name' />
        <input className='my-4 p-2 bg-gray-700 text-white' type='email' placeholder='Email' name='email' />
        <textarea className='bg-gray-700 p-2 text-white' name='message' rows='10' placeholder='Message'></textarea>
        <a href="#contact" className='flex justify-center items-center p-2 pb-16'>
          <button className="group relative inline-block overflow-hidden rounded border border-gray-100 bg-gray-200 px-12 py-3 text-xl sm:text-2xl text-center font-[Monospace] text-slate-800 hover:text-teal-600 focus:outline-none focus:ring active:bg-indigo-600 active:text-white">
            <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-teal-600 transition-all duration-200 group-hover:w-full"></span>
            <span className="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-teal-600 transition-all duration-200 group-hover:h-full"></span>
            <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-teal-600 transition-all duration-200 group-hover:w-full"></span>
            <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-teal-600 transition-all duration-200 group-hover:h-full"></span>
            Let's Collaborate
          </button>
        </a>
      </form>
    </div>
  );
};

export default Contact;
