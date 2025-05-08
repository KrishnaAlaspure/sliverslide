import { useState } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { BiMessageSquareDetail } from 'react-icons/bi';

const Topbar = () => {
  const [activeNav, setActiveNav] = useState('#home');

  return (
    <nav className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-black/30 backdrop-blur-md flex gap-4 p-4 rounded-full z-50">
      <a
        href="#home"
        onClick={() => setActiveNav('#home')}
        className={`p-3 rounded-full flex text-lg ${
          activeNav === '#home' ? 'bg-gray-800 text-white' : 'text-gray-400'
        } hover:bg-black/30`}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav('#about')}
        className={`p-3 rounded-full flex text-lg ${
          activeNav === '#about' ? 'bg-gray-800 text-white' : 'text-gray-400'
        } hover:bg-black/30`}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav('#experience')}
        className={`p-3 rounded-full flex text-lg ${
          activeNav === '#experience' ? 'bg-gray-800 text-white' : 'text-gray-400'
        } hover:bg-black/30`}
      >
        <BiBook />
      </a>
      <a
        href="#projects"
        onClick={() => setActiveNav('#projects')}
        className={`p-3 rounded-full flex text-lg ${
          activeNav === '#portfolio' ? 'bg-gray-800 text-white' : 'text-gray-400'
        } hover:bg-black/30`}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav('#contact')}
        className={`p-3 rounded-full flex text-lg ${
          activeNav === '#contact' ? 'bg-gray-800 text-white' : 'text-gray-400'
        } hover:bg-black/30`}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Topbar;  