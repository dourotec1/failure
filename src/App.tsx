import React from 'react';
import { Hero } from './components/Hero';
import { Manifesto } from './components/Manifesto';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Hero />
      <Manifesto />
    </div>
  );
}

export default App;