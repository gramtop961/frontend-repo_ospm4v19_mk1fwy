import React, { useState } from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import VideoDemo from './components/VideoDemo';
import Footer from './components/Footer';

function App() {
  const [showDemo, setShowDemo] = useState(false);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Hero onStart={() => setShowDemo(true)} />
      <Features />
      {showDemo && <VideoDemo />}
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
