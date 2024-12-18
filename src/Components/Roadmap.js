import React from 'react';
import './roadmap.css';

function Roadmap() {
  const roadmapData = [
    { quarter: 'Q1 2021', step: '01', title: 'Train Lean Agile Change Agent', description: 'Agile training modules\nAdd text here', icon: '🛠', color: 'q1' },
    { quarter: 'Q1 2021', step: '02', title: 'Train Executives', description: 'Leadership workshops\nAdd text here', icon: '👥', color: 'q1' },
    { quarter: 'Q2 2021', step: '03', title: 'Identify Value Streams', description: 'Identify and build agile release train\nAdd text here', icon: '🔍', color: 'q2' },
    { quarter: 'Q2 2021', step: '04', title: 'Prepare for ART', description: 'Assign scrum master\nAdd text here', icon: '📋', color: 'q2' },
    { quarter: 'Q2 2021', step: '05', title: 'Train Team & Launch Art', description: 'Hands-on agile tools\nAdd text here', icon: '🚀', color: 'q2' },
    { quarter: 'Q3 2021', step: '06', title: 'Launch More ART & Value Stream', description: 'Add more members to agile release train\nAdd text here', icon: '🔗', color: 'q3' },
    { quarter: 'Q3 2021', step: '07', title: 'Extend to Portfolio', description: 'Add text here', icon: '📂', color: 'q3' },
    { quarter: 'Q4 2021', step: '08', title: 'Sustain & Improve', description: 'Add text here', icon: '📈', color: 'q4' },
  ];

  return (
    <div className="roadmap-container">
      <h1 className="heading">Quarterly Roadmap for ART Launch Process Improvement</h1>
      <div className="q-header">
        <div className="q1">Q1 2021</div>
        <div className="q2">Q2 2021</div>
        <div className="q3">Q3 2021</div>
        <div className="q4">Q4 2021</div>
      </div>
      <div className="wave-line">
        {roadmapData.map((item, index) => (
          <div key={index} className={`roadmap-circle ${item.color}`}>
            <div className="arrow"></div>
            <div className="circle-icon">{item.icon}</div>
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
