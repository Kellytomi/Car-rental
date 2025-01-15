import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';

// Wave background component
const WaveEffect = () => (
  <div className="absolute inset-0 overflow-hidden">
    {/* Left wave */}
    <div className="absolute -left-1/4 top-0 w-2/3 h-full opacity-30 animate-wave-slow">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.15)_0%,_transparent_70%)]
        rotate-[-20deg] scale-y-150 blur-3xl transform-gpu"></div>
    </div>
    {/* Right wave */}
    <div className="absolute -right-1/4 top-1/4 w-2/3 h-full opacity-30 animate-wave-slower">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.15)_0%,_transparent_70%)]
        rotate-[20deg] scale-y-150 blur-3xl transform-gpu"></div>
    </div>
  </div>
);

const PricingCard = ({ title, price, period, description, features }) => (
  <div className="rounded-3xl bg-zinc-900/80 p-8 flex flex-col backdrop-blur-sm
    transform transition-all duration-300 hover:scale-105 hover:ring-2 hover:ring-white">
    <div className="mb-8">
      <h3 className="text-xl font-light mb-2">{title}</h3>
      <p className="text-sm text-gray-400">{description}</p>
    </div>

    <div className="mb-8">
      <div className="flex items-end mb-2">
        <span className="text-4xl font-light">{price}</span>
        {period && <span className="text-gray-400 ml-2">{period}</span>}
      </div>
    </div>

    <button className="w-full py-3 rounded-full mb-8 font-light transition-all duration-300
      bg-zinc-800 hover:bg-white hover:text-black">
      Get Started
    </button>

    <div>
      <p className="text-sm mb-4">What you will get</p>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start space-x-3 group">
            <CheckCircle className="w-5 h-5 text-gray-400 mt-0.5 transition-colors duration-300 group-hover:text-white" />
            <span className="text-sm text-gray-400 transition-colors duration-300 group-hover:text-white">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const Pricing = () => {
  const [billingPeriod, setBillingPeriod] = useState('monthly');

  return (
    <div className="min-h-screen bg-black text-white font-montserrat relative overflow-hidden">
      {/* Background Effects */}
      <WaveEffect />

      {/* Content */}
      <div className="relative max-w-5xl mx-auto px-4 py-12">
        <div className="text-center">
          {/* Grid Container */}
          <div className="relative mx-auto max-w-3xl rounded-[60px] overflow-hidden mb-12">
            {/* Grid Background */}
            <div className="absolute inset-0">
              <div 
                className="w-full h-full opacity-50"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, rgb(75 75 75 / 0.5) 1px, transparent 1px),
                    linear-gradient(to bottom, rgb(75 75 75 / 0.5) 1px, transparent 1px)
                  `,
                  backgroundSize: '64px 64px',
                  mask: 'radial-gradient(circle at center, black 60%, transparent 100%)'
                }}
              />
            </div>

            {/* Content inside grid */}
            <div className="relative px-4 py-6">
              {/* Pill with gradient border and glass effect */}
              <div className="inline-block relative mb-6 animate-float">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-500/20 to-gray-600/20 rounded-full blur-sm"></div>
                <div className="relative px-6 py-2 bg-zinc-900/80 backdrop-blur-sm rounded-full border border-gray-700">
                  <span className="text-sm text-gray-300">Elevate your journey with luxury cars</span>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-light mb-3">
                Discover the Perfect<br />
                Luxury Experience<br />
                for Your Journey
              </h1>
              <p className="text-gray-400 font-light mb-6">
                Flexible plans, transparent pricing at no hidden costs.
              </p>

              {/* Toggle Buttons */}
              <div className="inline-block relative">
                <div className="bg-zinc-900/90 rounded-full p-1 relative">
                  <div className="flex">
                    <button 
                      className={`px-8 py-2 rounded-full text-base transition-all duration-300 relative ${
                        billingPeriod === 'monthly' 
                          ? 'bg-gradient-to-b from-white via-gray-200 to-gray-300 text-black font-medium shadow-lg' 
                          : 'text-gray-400'
                      }`}
                      onClick={() => setBillingPeriod('monthly')}
                    >
                      Monthly
                    </button>
                    <button 
                      className={`px-8 py-2 rounded-full text-base transition-all duration-300 relative ${
                        billingPeriod === 'annually' 
                          ? 'bg-gradient-to-b from-white via-gray-200 to-gray-300 text-black font-medium shadow-lg' 
                          : 'text-gray-400'
                      }`}
                      onClick={() => setBillingPeriod('annually')}
                    >
                      Annually
                    </button>
                  </div>
                </div>

                {/* Static Shine Effect - Exact match to reference */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-64">
                    <div className="h-[1px] bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                    <div className="h-[20px] bg-gradient-to-b from-white/15 to-transparent blur-[12px] -mt-[10px]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          <PricingCard
            title="Free Plan"
            price="Free"
            description="Ideal for first-time users or short-term rentals"
            features={[
              "1-3 days rental",
              "Choose from a select fleet of luxury cars",
              "24/7 customer support",
              "Access to premium concierge services",
              "Free up to3 days"
            ]}
          />

          <PricingCard
            title="Monthly Plan"
            price="$100"
            period="/per month"
            description="Ideal to experience luxury on a regular basis"
            features={[
              "Up to 30 days rental",
              "Full access to our premium fleet",
              "Free delivery & pick-up service",
              "Unlimited mileage",
              "Exclusive access to VIP offers",
              "24/7 concierge service"
            ]}
          />

          <PricingCard
            title="Annual Plan"
            price="$12,500"
            period="/per year"
            description="For true connoisseur of luxury"
            features={[
              "All benefits of monthly plan plus:",
              "Up to 365 days rental",
              "Customizable car selection",
              "Priority access to limited edition cars",
              "Complimentary vehicle upgrades",
              "Dedicated personal account manager"
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Pricing;