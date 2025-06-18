import React from 'react';
import { ExternalLink, Star, DollarSign } from 'lucide-react';

interface Tool {
  id: number;
  name: string;
  description: string;
  category: string;
  rating: number;
  pricing: string;
  features: string[];
  website: string;
  logo: string;
}

interface ToolCardProps {
  tool: Tool;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
              {tool.name.charAt(0)}
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                {tool.name}
              </h3>
              <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                {tool.category}
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <Star className="text-yellow-400 fill-current" size={16} />
            <span className="text-sm font-medium text-gray-700">{tool.rating}</span>
          </div>
        </div>

        <p className="text-gray-600 mb-4 leading-relaxed">
          {tool.description}
        </p>

        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-900 mb-2">Características principales:</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            {tool.features.slice(0, 3).map((feature, index) => (
              <li key={index} className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center space-x-2">
            <DollarSign className="text-green-600" size={16} />
            <span className="text-sm font-medium text-gray-900">{tool.pricing}</span>
          </div>
          <a
            href={tool.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
          >
            <span>Visitar</span>
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ToolCard;