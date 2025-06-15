
import React, { useEffect, useRef } from 'react';
import { Zap, Code, Palette, BarChart3, Shield, Globe } from 'lucide-react';

const Services = () => {
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const children = entry.target.querySelectorAll('.service-card');
            children.forEach((child, index) => {
              setTimeout(() => {
                child.classList.add('animate-bounce-in');
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (servicesRef.current) observer.observe(servicesRef.current);
    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Custom web applications built with cutting-edge technologies for optimal performance and user experience.',
      color: 'from-sky-400 to-cyan-400'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive designs that engage users and drive conversions through thoughtful user experience.',
      color: 'from-blue-400 to-indigo-400'
    },
    {
      icon: BarChart3,
      title: 'Digital Marketing',
      description: 'Data-driven marketing strategies that amplify your brand reach and maximize ROI across all channels.',
      color: 'from-cyan-400 to-teal-400'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and ensure business continuity.',
      color: 'from-emerald-400 to-green-400'
    },
    {
      icon: Globe,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services for enhanced flexibility and cost efficiency.',
      color: 'from-indigo-400 to-purple-400'
    },
    {
      icon: Zap,
      title: 'Automation',
      description: 'Intelligent automation solutions that streamline processes and boost operational efficiency.',
      color: 'from-yellow-400 to-orange-400'
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-sky-500 to-cyan-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto font-light">
            Comprehensive solutions tailored to accelerate your business growth and digital transformation
          </p>
        </div>

        <div ref={servicesRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div key={index} className="service-card opacity-0 group">
              <div className="relative glass-effect rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border border-sky-100/50 group-hover:border-sky-200">
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>
                
                {/* Icon */}
                <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                  <service.icon className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-sky-600 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Learn more link */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href="#" className="inline-flex items-center text-sky-600 font-medium hover:text-sky-700">
                    Learn more 
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
