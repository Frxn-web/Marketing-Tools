import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ToolCard from './components/ToolCard';
import AdSpace from './components/AdSpace';
import { tools } from './data/tools';
import { Search, TrendingUp, Users, Star, Award, Target, Zap } from 'lucide-react';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTools = useMemo(() => {
    return tools.filter(tool => {
      const matchesCategory = selectedCategory === 'Todas' || tool.category === selectedCategory;
      const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           tool.features.some(feature => feature.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  const categoryStats = useMemo(() => {
    const stats = tools.reduce((acc, tool) => {
      acc[tool.category] = (acc[tool.category] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    return stats;
  }, []);

  const averageRating = useMemo(() => {
    const sum = tools.reduce((acc, tool) => acc + tool.rating, 0);
    return (sum / tools.length).toFixed(1);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onCategoryFilter={setSelectedCategory} selectedCategory={selectedCategory} />
      
      <Hero />

      {/* Search Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-12">
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Buscar herramientas por nombre, descripción o características..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Award className="text-blue-600" size={24} />
            </div>
            <div className="text-2xl font-bold text-gray-900">{tools.length}</div>
            <div className="text-sm text-gray-600">Herramientas</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Target className="text-green-600" size={24} />
            </div>
            <div className="text-2xl font-bold text-gray-900">{Object.keys(categoryStats).length}</div>
            <div className="text-sm text-gray-600">Categorías</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Star className="text-yellow-600" size={24} />
            </div>
            <div className="text-2xl font-bold text-gray-900">{averageRating}</div>
            <div className="text-sm text-gray-600">Rating Promedio</div>
          </div>
          <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Zap className="text-purple-600" size={24} />
            </div>
            <div className="text-2xl font-bold text-gray-900">{filteredTools.length}</div>
            <div className="text-sm text-gray-600">Resultados</div>
          </div>
        </div>
      </section>

      {/* Ad Space - Rectangle */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <AdSpace size="rectangle" className="mx-auto max-w-md" />
      </section>

      {/* Tools Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              {selectedCategory === 'Todas' ? 'Todas las Herramientas' : `Herramientas de ${selectedCategory}`}
            </h2>
            <p className="text-gray-600 mt-2">
              {filteredTools.length} herramienta{filteredTools.length !== 1 ? 's' : ''} encontrada{filteredTools.length !== 1 ? 's' : ''}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTools.map((tool, index) => (
            <React.Fragment key={tool.id}>
              <ToolCard tool={tool} />
              
              {/* Insert ads every 6 tools */}
              {(index + 1) % 6 === 0 && index < filteredTools.length - 1 && (
                <div className="md:col-span-2 lg:col-span-3">
                  <AdSpace size="banner" className="my-8" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {filteredTools.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="text-gray-400" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No se encontraron herramientas</h3>
            <p className="text-gray-600 mb-6">
              Intenta ajustar tu búsqueda o selecciona una categoría diferente.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('Todas');
              }}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Mostrar todas las herramientas
            </button>
          </div>
        )}
      </section>

      {/* Final Ad Space */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <AdSpace size="banner" />
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">MT</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Marketing Tools</h3>
                  <p className="text-gray-400">100 Mejores Herramientas</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Descubre las mejores herramientas de marketing digital para hacer crecer tu negocio. 
                Seleccionadas por expertos y actualizadas regularmente.
              </p>
              <div className="flex space-x-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">{tools.length}+</div>
                  <div className="text-sm text-gray-400">Herramientas</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">{Object.keys(categoryStats).length}</div>
                  <div className="text-sm text-gray-400">Categorías</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">{averageRating}</div>
                  <div className="text-sm text-gray-400">Rating Promedio</div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Categorías Populares</h4>
              <ul className="space-y-2">
                {Object.entries(categoryStats)
                  .sort(([,a], [,b]) => b - a)
                  .slice(0, 6)
                  .map(([category, count]) => (
                    <li key={category}>
                      <button
                        onClick={() => setSelectedCategory(category)}
                        className="text-gray-300 hover:text-white transition-colors text-sm"
                      >
                        {category} ({count})
                      </button>
                    </li>
                  ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Información</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Sobre Nosotros</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Metodología</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contacto</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Política de Privacidad</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 Marketing Tools. Todos los derechos reservados. 
              Las marcas mencionadas son propiedad de sus respectivos dueños.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;