import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav border-b border-pink-100 bg-white/30 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-800">Halima</div>
          <div className="hidden md:flex space-x-8">
            {['Accueil', 'À propos', 'Projets', 'Compétences', 'process', 'Contact'].map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase().replace(' ', '-').replace('à', 'a')}`}
                className="text-gray-700 hover:text-pink-500 transition-colors duration-300 cursor-pointer"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
