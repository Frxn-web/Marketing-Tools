import React from 'react';
import { TrendingUp, Users, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6">
            Las <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">100 Mejores</span>
            <br />
            Herramientas de Marketing Digital
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Descubre las herramientas más poderosas y efectivas para hacer crecer tu negocio online. 
            Seleccionadas por expertos y probadas por miles de empresas exitosas.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12">
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <TrendingUp className="text-blue-600" size={24} />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-gray-900">100+</div>
                <div className="text-sm text-gray-600">Herramientas</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Users className="text-green-600" size={24} />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-gray-900">50K+</div>
                <div className="text-sm text-gray-600">Usuarios</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                <Star className="text-yellow-600" size={24} />
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-gray-900">4.8</div>
                <div className="text-sm text-gray-600">Rating</div>
              </div>
            </div>
          </div>

          {/* Ad Space */}
          <div className="bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg p-8 mb-8">
            <p className="text-gray-500 text-sm">Espacio para Google Ads (728x90)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;