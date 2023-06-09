import React, { useState } from 'react';

const Nav = () => {
  const Links = [
    { name: 'HOME', link: 'home' },
    { name: 'SKILLS', link: 'skills' },
    { name: 'PROJECTS', link: 'projects' },
    { name: 'CONTACT', link: 'contact'}
  ];

  const [activeLink, setActiveLink] = useState(null);
  const [open, setOpen] = useState(false);

  const scrollToSection = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
    setActiveLink(sectionId);
  };

  return (
    <div className="sticky shadow-md w-full top-0 left-0 z-20 border-b-2 border-gray-700">
      <div className="md:flex items-center justify-between bg-gray-900 py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Monospace] text-gray-100">
          <span className="text-3xl text-yellow-400 mr-1 pt-2">
            <ion-icon name="checkmark-circle-outline"></ion-icon>
          </span>
          Carson Barnes
          <div className="flex mt-4 ml-6 pt-2 space-x-6 sm:justify-center sm:mt-0">
              <a href="https://github.com/cbarnes0" target="_blank" className="text-gray-500 hover:text-gray-100 dark:hover:text-white text-3xl">
              <ion-icon name="logo-github"></ion-icon>
              </a>
              <a href="https://www.linkedin.com/in/cb019803/" target="_blank" className="text-gray-500 hover:text-gray-100 dark:hover:text-white text-3xl">
              <ion-icon name="logo-linkedin"></ion-icon>
              </a>
          </div>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl text-gray-100 absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-gray-900 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? 'top-20 opacity-100' : 'top-[-490px]'} md:opacity-100 opacity-0`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <a
                href={`#${link.link}`}
                className={`text-gray-100 hover:text-yellow-500 selection:text-green-500 ${
                  activeLink === link.link ? 'text-yellow-500' : ''
                }`}
                onClick={(event) => scrollToSection(event, link.link)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Nav;


