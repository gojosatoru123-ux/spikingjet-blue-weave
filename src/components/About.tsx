
import React, { useEffect, useRef } from 'react';
import { Target, Users, Award, TrendingUp } from 'lucide-react';

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) observer.observe(aboutRef.current);
    if (statsRef.current) observer.observe(statsRef.current);

    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: Users, number: '500+', label: 'Happy Clients' },
    { icon: Award, number: '50+', label: 'Awards Won' },
    { icon: TrendingUp, number: '99%', label: 'Success Rate' },
    { icon: Target, number: '10+', label: 'Years Experience' }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-white via-sky-50/50 to-cyan-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={aboutRef} className="text-center mb-20 opacity-0">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            About <span className="gradient-text">SpikingJet</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-sky-500 to-cyan-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
            We are a forward-thinking company dedicated to transforming businesses through innovative solutions, 
            strategic insights, and cutting-edge technology. Our mission is to help organizations achieve 
            unprecedented growth and success.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-8">
            <h3 className="text-4xl font-bold text-gray-900 mb-6">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              To be the catalyst that propels businesses into the future, creating sustainable value and 
              driving innovation across industries. We believe in the power of technology and human 
              ingenuity working together.
            </p>
            <div className="space-y-6">
              {[
                'Innovation-driven approach',
                'Client-centric solutions', 
                'Sustainable growth focus'
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-4 group">
                  <div className="w-4 h-4 bg-gradient-to-r from-sky-500 to-cyan-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="text-gray-700 text-lg group-hover:text-sky-600 transition-colors duration-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="glass-effect rounded-3xl p-10 text-center group hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-sky-500 to-cyan-500 rounded-2xl p-8 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-float"></div>
                <h4 className="text-3xl font-bold mb-6 relative z-10">Our Mission</h4>
                <p className="leading-relaxed text-lg relative z-10">
                  To deliver exceptional value through innovative solutions that drive business transformation, 
                  foster growth, and create lasting partnerships with our clients worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div ref={statsRef} className="opacity-0">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group hover:scale-110 transition-all duration-300">
                <div className="glass-effect rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-sky-50 group-hover:to-cyan-50">
                  <stat.icon className="w-14 h-14 text-sky-500 mx-auto mb-6 group-hover:scale-125 transition-transform duration-300" />
                  <h4 className="text-4xl font-bold text-gray-900 mb-3 gradient-text">{stat.number}</h4>
                  <p className="text-gray-600 font-medium">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
