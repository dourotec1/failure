import React from 'react';
import { Users, Twitter } from 'lucide-react';

export function Manifesto() {
  return (
    <div className="bg-black py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-6">Our Time to Rise</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-300 mb-8">
              We are the ones who've watched from the sidelines. The dreamers who've seen every investment turn to dust, 
              every business idea crumble, while others celebrated their wins. We're the ones they said would never make it.
            </p>
            <p className="text-xl text-gray-300 mb-8">
              But today, everything changes. $FAILURE isn't just another token – it's our battle cry. 
              Our chance to prove that even the biggest failures can write the greatest comeback stories.
            </p>
            <p className="text-xl text-red-500 font-semibold mb-8">
              This is our one shot at greatness. No rug pulls. No empty promises. 
              When we reach the moon, we're building a fortress and staying there.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-red-900/30 to-black p-8 rounded-lg border border-red-800 mb-16">
          <h3 className="text-2xl font-bold text-white mb-4">Why This Time Is Different</h3>
          <div className="text-lg text-gray-300 space-y-4">
            <p>
              Every rejection, every mockery, every dismissive laugh from our friends and family has led to this moment. 
              We're not just building a token – we're building a movement of the overlooked and underestimated.
            </p>
            <p>
              In our Telegram channel, we're not just traders – we're a family of fighters. 
              We coordinate, we strategize, and most importantly, we HOLD. Together, we'll show them all what 
              the "failures" of society can achieve when we unite.
            </p>
            <p className="text-red-500 font-semibold">
              The elites, the normies, the ones who always win – they're not welcome here. 
              This is our revolution, our chance to finally be on the winning side of history.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a 
            href="https://t.me/failuretoken" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg transition text-lg font-semibold"
          >
            <Users className="h-5 w-5" />
            Join Telegram
          </a>
          <a 
            href="https://x.com/Failuretoken" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center justify-center gap-2 bg-[#1DA1F2] hover:bg-[#1a8cd8] text-white px-8 py-4 rounded-lg transition text-lg font-semibold"
          >
            <Twitter className="h-5 w-5" />
            Follow Twitter
          </a>
        </div>
      </div>
    </div>
  );
}