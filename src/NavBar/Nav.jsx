import { useState } from 'react';
// import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 p-4 bg-transparent">
      <div className="flex justify-between items-center text-white">
    
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          ☰
        </button>
        <ul
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:flex space-x-6 absolute md:static bg-gray-800 md:bg-transparent w-full md:w-auto top-12 md:top-0 left-0 p-4 md:p-0`}
        >
          <li><a href="#home" className="hover:underline">Home</a></li>
          <li><a href="#courses" className="hover:underline">Courses</a></li>
          <li><a href="#student" className="hover:underline">Student</a></li>
          <li><a href="#contact" className="hover:underline text-end">Contact</a></li>
          <li>
         
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
