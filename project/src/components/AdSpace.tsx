import React from 'react';

interface AdSpaceProps {
  size: 'banner' | 'rectangle' | 'skyscraper';
  className?: string;
}

const AdSpace: React.FC<AdSpaceProps> = ({ size, className = '' }) => {
  const sizeClasses = {
    banner: 'h-24 md:h-32', // 728x90 or responsive banner
    rectangle: 'h-64', // 300x250
    skyscraper: 'h-96' // 160x600
  };

  const sizeLabels = {
    banner: 'Banner (728x90)',
    rectangle: 'Rectangle (300x250)',
    skyscraper: 'Skyscraper (160x600)'
  };

  return (
    <div className={`bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center ${sizeClasses[size]} ${className}`}>
      <div className="text-center">
        <p className="text-gray-400 text-sm font-medium">Espacio para Google Ads</p>
        <p className="text-gray-300 text-xs mt-1">{sizeLabels[size]}</p>
      </div>
    </div>
  );
};

export default AdSpace;