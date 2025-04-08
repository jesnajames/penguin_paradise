import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="pt-24 pb-12 px-4 bg-gradient-to-b from-primary to-secondary text-white">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
          Discover the World of Penguins
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 opacity-90">
          Explore the fascinating lives of these remarkable flightless birds
        </p>
        <button className="btn bg-white text-primary hover:bg-opacity-90">
          Start Exploring
        </button>
      </div>
    </section>
  );
};

export default Hero;
