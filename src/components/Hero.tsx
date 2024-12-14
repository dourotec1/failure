import React from 'react';
import { Users } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-black text-white">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black" />
      </div>
      
      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            <span className="block text-red-500">$FAILURE</span>
            <span className="block mt-2">The Token for the Underdogs</span>
          </h1>
          
          <div className="mt-8 flex flex-col items-center">
            <img 
              src="https://i.ibb.co/Nx54kmf/462581127-1353330466074517-2117913595347193976-n.png" 
              alt="Failure Token Logo" 
              className="w-40 h-40 object-contain rounded-full border-4 border-red-500 mb-6"
            />
            
            <p className="mx-auto max-w-2xl text-xl text-gray-300 mb-6">
              For everyone who's watched from the sidelines. For every missed opportunity, 
              failed venture, and dream that didn't quite make it. This is our time to rise.
            </p>

            <a 
              href="https://t.me/failuretoken" 
              target="_blank" 
              rel="noopener noreferrer"
              className="rounded-lg bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700 transition flex items-center gap-2"
            >
              <Users className="h-5 w-5" />
              Join the Revolution
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
