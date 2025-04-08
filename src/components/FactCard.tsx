import React from 'react';
import { PenguinFact } from '../types/penguin';

interface FactCardProps {
  fact: PenguinFact;
}

const FactCard: React.FC<FactCardProps> = ({ fact }) => {
  return (
    <div className="card p-6">
      <div className="text-4xl mb-4">{fact.icon}</div>
      <h3 className="text-xl font-heading font-bold text-primary mb-2">
        {fact.title}
      </h3>
      <p className="text-gray-700">{fact.description}</p>
    </div>
  );
};

export default FactCard;
