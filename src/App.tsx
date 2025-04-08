import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PenguinGallery from './components/PenguinGallery';
import FactCard from './components/FactCard';
import Footer from './components/Footer';
import { facts } from './mockData';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <main className="container mx-auto px-4 py-12">
        <PenguinGallery />
        <section className="mt-16">
          <h2 className="text-3xl font-heading font-bold text-primary mb-8">Fascinating Facts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {facts.map(fact => (
              <FactCard key={fact.id} fact={fact} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
