import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PenguinGallery from './components/PenguinGallery';
import FactCard from './components/FactCard';
import Footer from './components/Footer';
import { facts } from './mockData';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import AuthPage from './pages/AuthPage';

// A simple component to render the main page content
const MainPage: React.FC = () => {
  return (
    <>
      <Hero />
      <main className="container mx-auto px-4 py-12">
        <PenguinGallery />
        <section id="facts" className="mt-16">
          <h2 className="text-3xl font-heading font-bold text-primary mb-8">Fascinating Facts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {facts.map(fact => (
              <FactCard key={fact.id} fact={fact} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

// Wrapper component to handle routing logic after auth state is loaded
const AppRoutes: React.FC = () => {
    const { user, loading } = useAuth();

    // Don't render routes until loading is finished to prevent flicker
    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-background">
                {/* Optional: Add a loading spinner */}
                Loading...
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background flex flex-col">
             <Navbar />
             <div className="flex-grow pt-16"> {/* Add padding top to prevent content overlap with fixed navbar */}
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route
                        path="/auth"
                        element={!user ? <AuthPage /> : <Navigate to="/" replace />} // Redirect if logged in
                    />
                    {/* Add other routes here */}
                    {/* Example of a protected route:
                    <Route
                        path="/profile"
                        element={user ? <ProfilePage /> : <Navigate to="/auth" replace />}
                    />
                    */}
                     <Route path="*" element={<Navigate to="/" replace />} /> {/* Redirect unknown paths to home */}
                </Routes>
             </div>
             <Footer />
        </div>
    );
}


const App: React.FC = () => {
  return (
    <AuthProvider>
        <Router>
            <AppRoutes />
        </Router>
    </AuthProvider>
  );
};

export default App;
