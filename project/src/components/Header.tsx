import React, { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';

interface HeaderProps {
  onCategoryFilter: (category: string) => void;
  selectedCategory: string;
}

const Header: React.FC<HeaderProps> = ({ onCategoryFilter, selectedCategory }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const categories = [
    'Todas',
    'Email Marketing',
    'SEO',
    'Redes Sociales',
    'Analytics',
    'Contenido',
    'Automatización',
    'CRM',
    'Publicidad'
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">MT</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Marketing Tools</h1>
              <p className="text-sm text-gray-600">100 Mejores Herramientas</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => onCategoryFilter(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                {category}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="grid grid-cols-2 gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    onCategoryFilter(category);
                    setIsMenuOpen(false);
                  }}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;