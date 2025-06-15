
import React, { useEffect, useRef } from 'react';
import { Linkedin, Twitter, Github } from 'lucide-react';

const Team = () => {
  const teamRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.team-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-fade-in');
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (teamRef.current) observer.observe(teamRef.current);
    return () => observer.disconnect();
  }, []);

  const teamMembers = [
    {
      name: 'Sarah Johnson',
      position: 'CEO & Founder',
      image: '/placeholder.svg',
      bio: 'Visionary leader with 15+ years in tech innovation',
      social: { linkedin: '#', twitter: '#', github: '#' }
    },
    {
      name: 'Michael Chen',
      position: 'CTO',
      image: '/placeholder.svg',
      bio: 'Technical genius driving our technological advancement',
      social: { linkedin: '#', twitter: '#', github: '#' }
    },
    {
      name: 'Emily Rodriguez',
      position: 'Head of Design',
      image: '/placeholder.svg',
      bio: 'Creative mastermind crafting beautiful user experiences',
      social: { linkedin: '#', twitter: '#', github: '#' }
    },
    {
      name: 'David Kim',
      position: 'Lead Developer',
      image: '/placeholder.svg',
      bio: 'Full-stack expert building scalable solutions',
      social: { linkedin: '#', twitter: '#', github: '#' }
    }
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Our <span className="text-blue-600">Team</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate professionals dedicated to delivering excellence and driving innovation
          </p>
        </div>

        <div ref={teamRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card opacity-0 group">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center">
                <div className="relative mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-blue-100 group-hover:border-blue-300 transition-colors duration-300"
                  />
                  <div className="absolute inset-0 rounded-full bg-blue-600/0 group-hover:bg-blue-600/10 transition-all duration-300"></div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {member.name}
                </h3>
                
                <p className="text-blue-600 font-medium mb-3">{member.position}</p>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">{member.bio}</p>
                
                <div className="flex justify-center space-x-4">
                  <a 
                    href={member.social.linkedin}
                    className="p-2 text-gray-400 hover:text-blue-600 transition-colors duration-300 hover:scale-110 transform"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a 
                    href={member.social.twitter}
                    className="p-2 text-gray-400 hover:text-blue-600 transition-colors duration-300 hover:scale-110 transform"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a 
                    href={member.social.github}
                    className="p-2 text-gray-400 hover:text-blue-600 transition-colors duration-300 hover:scale-110 transform"
                  >
                    <Github className="w-5 h-5" />
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

export default Team;
