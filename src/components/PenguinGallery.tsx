import React from 'react';
import PenguinCard from './PenguinCard';
import { penguins } from '../mockData';

const PenguinGallery: React.FC = () => {
  return (
    <section id="species" className="py-12">
      <h2 className="text-3xl font-heading font-bold text-primary mb-8">
        Penguin Species
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {penguins.map(penguin => (
          <PenguinCard key={penguin.id} penguin={penguin} />
        ))}
      </div>
    </section>
  );
};

export default PenguinGallery;
