import React from "react";
import "./TeamMemberBox.css";

const TeamMemberBox = ({ image, name, role, socialLinks }) => {
  return (
    <div className="team-member-box">
      <div className="image-container">
        <img src={image} alt={`${name}`} className="team-image" />
      </div>
      <div className="member-info">
        <h3>{name}</h3>
        <p>{role}</p>
        <div className="social-links">
          {socialLinks.map((link, index) => (
            <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
              <img src={link.icon} alt={`${link.name} icon`} className="social-icon" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamMemberBox;
