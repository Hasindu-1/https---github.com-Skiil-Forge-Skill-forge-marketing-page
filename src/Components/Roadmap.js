import React from 'react';
import './roadmap.css';

// Import Images
import icon01 from '../icons/concept.jpg';
import icon02 from '../icons/images.png';
import icon03 from '../icons/images.jpeg';
import icon04 from '../icons/Prototype.png';
import icon05 from '../icons/images (1).png';
import icon06 from '../icons/testing.jpeg';
import icon07 from '../icons/concept.jpg';
import icon08 from '../icons/images (2).png';

function Roadmap() {
  const roadmapData = [
    { quarter: 'Q1 2021', step: '01', title: 'Conceptualization', description: 'Brainstorm and finalize core app features like dashboards, gamified badges, and ML-based recommendations.', icon: icon01, color: 'q1' },
    { quarter: 'Q1 2021', step: '02', title: 'Research & Validation', description: 'Conduct competitor analysis and Survey', icon: icon02, color: 'q1' },
    { quarter: 'Q2 2021', step: '03', title: 'Planning & Analysis', description: 'Design the app’s technical architecture', icon: icon03, color: 'q2' },
    { quarter: 'Q2 2021', step: '04', title: 'Prototype Development', description: 'Build a working prototype with UI/UX screens, competition listings, and notifications.', icon: icon04, color: 'q2' },
    { quarter: 'Q2 2021', step: '05', title: 'Core Development', description: 'Implement core features like gamification, leaderboards, and ML recommendations.', icon: icon05, color: 'q2' },
    { quarter: 'Q3 2021', step: '06', title: 'Pre-Launch Testing & Marketing', description: 'Launch a marketing campaign with a landing page, social media teasers, and emails.', icon: icon06, color: 'q3' },
    { quarter: 'Q3 2021', step: '07', title: 'Official Launch & Post-Launch Support', description: 'Release the app on web and mobile platforms, ensuring performance monitoring.', icon: icon07, color: 'q3' },
    { quarter: 'Q4 2021', step: '08', title: 'Future implementations & Improve', description: 'Advancing Features and AI ', icon: icon08, color: 'q4' },
  ];

  return (
    <div className="roadmap-container">
      <h1 className="heading">Quarterly Roadmap for Launch Process</h1>
      <div className="q-header">
        <div className="q1">Q1 2024</div>
        <div className="q2">Q2 2024</div>
        <div className="q3">Q3 2025</div>
        <div className="q4">Q4 2025</div>
      </div>
      <div className="wave-line">
        {roadmapData.map((item, index) => (
          <div key={index} className={`roadmap-circle ${item.color}`}>
            <div className="arrow"></div>
            <div className="circle-icon">
              <img src={item.icon} alt={`Step ${item.step}`} className="icon-image" />
            </div>
            <div className="circle-content">
              <h4 className="circle-title">{item.title}</h4>
              <p className="circle-description">{item.description}</p>
            </div>
            <div className="circle-step">{item.step}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Roadmap;
