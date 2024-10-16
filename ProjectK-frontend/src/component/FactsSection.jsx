// src/components/FactsSection.jsx
import React, { useState, useEffect } from "react";



// Custom hook for counter animation
const useCounter = (start, end, duration) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const currentCount = Math.min(Math.floor((progress / duration) * end), end);
      setCount(currentCount);
      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [start, end, duration]);

  return count;
};

const FactsSection = () => {
  const yearsExperience = useCounter(0, 1234, 2000);
  const expertTechnicians = useCounter(0, 1234, 2000);
  const satisfiedClients = useCounter(0, 1234, 2000);
  const completeProjects = useCounter(0, 1234, 2000);

  return (
    <div className="bg-cover bg-center py-16" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(src/assets/img2.jpg)' }}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {/* Fact 1: Years Experience */}
          <div className="wow fadeIn">
            <i className="fa fa-check fa-2x text-white mb-3"></i>
            <h2 className="text-white text-4xl font-bold mb-2">{yearsExperience}</h2>
            <p className="text-white mb-0">Years Experience</p>
          </div>

          {/* Fact 2: Expert Technicians */}
          <div className="wow fadeIn" data-wow-delay="0.3s">
            <i className="fa fa-users-cog fa-2x text-white mb-3"></i>
            <h2 className="text-white text-4xl font-bold mb-2">{expertTechnicians}</h2>
            <p className="text-white mb-0">Expert Technicians</p>
          </div>

          {/* Fact 3: Satisfied Clients */}
          <div className="wow fadeIn" data-wow-delay="0.5s">
            <i className="fa fa-users fa-2x text-white mb-3"></i>
            <h2 className="text-white text-4xl font-bold mb-2">{satisfiedClients}</h2>
            <p className="text-white mb-0">Satisfied Clients</p>
          </div>

          {/* Fact 4: Complete Projects */}
          <div className="wow fadeIn" data-wow-delay="0.7s">
            <i className="fa fa-car fa-2x text-white mb-3"></i>
            <h2 className="text-white text-4xl font-bold mb-2">{completeProjects}</h2>
            <p className="text-white mb-0">Complete Projects</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FactsSection;
