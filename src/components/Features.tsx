import React from 'react';
import { TrendingDown, Frown, ThumbsDown, Coins } from 'lucide-react';

const features = [
  {
    title: "Anti-Success Mechanism",
    description: "Our revolutionary technology ensures you'll probably lose money, just like everything else in life.",
    icon: TrendingDown
  },
  {
    title: "Disappointment Guaranteed",
    description: "Built by failures, for failures. Finally, a token that matches your life expectations.",
    icon: Frown
  },
  {
    title: "Perpetual Underachievement",
    description: "Watch as your investment follows the pattern of your life decisions.",
    icon: ThumbsDown
  },
  {
    title: "Zero Utility",
    description: "Just like your degree, this token serves absolutely no purpose.",
    icon: Coins
  }
];

export function Features() {
  return (
    <div className="bg-black py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div key={index} className="relative rounded-lg border border-red-800 p-6 hover:border-red-600 transition">
              <feature.icon className="h-8 w-8 text-red-500 mb-4" />
              <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
              <p className="mt-2 text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}