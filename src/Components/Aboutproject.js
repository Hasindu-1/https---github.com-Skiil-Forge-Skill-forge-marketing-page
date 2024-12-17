import React from 'react';
import './Aboutproject.css';

const Aboutproject = () => {
  return (
    <div className="aboutproject-area">
      {/* Left Section */}
      <div className="Aleft-section">
        <h1>About Us</h1>
        <p>Welcome to SkillForge, the ultimate platform for students to discover, participate in, 
          and showcase their achievements in tech competitions. Designed to empower the next generation of IT talent,
          SkillForge provides a centralized hub for opportunities, progress tracking, and professional portfolio building.
          With features like gamified rewards, leaderboards, and personalized recommendations, 
          we help students turn their skills into success and connect with future career opportunities.

        </p>
        {/* Add the project description over here */}
       

      </div>

    {/* Right Section     */}
  
    <div className="Aright-section">
      
    
      {/* Centralized Tech Competitions */}
      <article className="first">
          <h3>1. Centralized Tech Competitions</h3>
          <ul>
            <li>Separate portals for<br></br> Students and Organizers</li>
            <li>Student Dashboard</li>
            <li>Organizer Dashboard</li>
            <li>IT Professionals Dashboard</li>
          </ul>
        </article>

        {/* Student Features */}
        <article className="second">
          <h3>2. Student Features</h3>
          <ul>
            <li>Gamified Rewards and Badges</li>
            <li>Activity Progress Monitoring</li>
            <li>ML-Based Competition Recommendations</li>
            <li>Portfolio Integration</li>
            <li>Leaderboard & Ranking System</li>
          </ul>
        </article>

        {/* Organizer Features */}
        <article className="third">
          <h3>3. Organizer Features</h3>
          <ul>
            <li>Event Organization & Management</li>
            <li>Community Feed Engagement</li>
            <li>Event Posting and Promotion</li>
            <li>Event Rating & Certification</li>
            <li>Advertising and Branding Opportunities</li>
          </ul>
        </article>

        {/* Common Features */}
        <article className="fourth">
          <h3>4. Common Features</h3>
          <ul>
            <li>Activity Feed for Community Interaction</li>
            <li>Competition Listings</li>
            <li>Notifications & Alerts</li>
            <li>Team Formation & Collaboration Tools</li>
            <li>User Profiles for Students,Organizers,<br></br> and Professionals</li>
          </ul>
        </article>
    </div>

     
  </div>  
  );
};

export default Aboutproject;
