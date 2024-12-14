import React from 'react';

export function Tokenomics() {
  return (
    <div className="bg-gradient-to-b from-black to-red-950 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-16">Tokenomics of Failure</h2>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg bg-black/50 p-6 border border-red-800">
            <div className="text-4xl font-bold text-red-500 mb-2">40%</div>
            <div className="text-xl font-semibold text-white mb-2">Liquidity Pool</div>
            <p className="text-gray-400">Locked forever, just like your potential</p>
          </div>
          
          <div className="rounded-lg bg-black/50 p-6 border border-red-800">
            <div className="text-4xl font-bold text-red-500 mb-2">30%</div>
            <div className="text-xl font-semibold text-white mb-2">Team Tokens</div>
            <p className="text-gray-400">We'll probably mess this up too</p>
          </div>
          
          <div className="rounded-lg bg-black/50 p-6 border border-red-800">
            <div className="text-4xl font-bold text-red-500 mb-2">30%</div>
            <div className="text-xl font-semibold text-white mb-2">Public Sale</div>
            <p className="text-gray-400">Your chance to join the losing team</p>
          </div>
        </div>
      </div>
    </div>
  );
}