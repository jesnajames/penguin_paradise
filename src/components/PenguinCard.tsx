import React from 'react';
import { Penguin } from '../types/penguin';

interface PenguinCardProps {
  penguin: Penguin;
}

const PenguinCard: React.FC<PenguinCardProps> = ({ penguin }) => {
  return (
    <div className="card overflow-hidden">
      <img 
        src={penguin.imageUrl} 
        alt={penguin.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-heading font-bold text-primary mb-2">
          {penguin.name}
        </h3>
        <p className="text-sm text-gray-600 italic mb-4">
          {penguin.scientificName}
        </p>
        <p className="text-gray-700 mb-4">
          {penguin.description}
        </p>
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="font-semibold">Height:</span> {penguin.height}
          </div>
          <div>
            <span className="font-semibold">Weight:</span> {penguin.weight}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PenguinCard;
