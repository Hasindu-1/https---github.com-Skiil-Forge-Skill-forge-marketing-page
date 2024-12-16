import React from 'react';
import './FramedArea.css';

const FramedArea = ({ text, buttonLabel, onClick }) => {
  return (
    <div className="framed-area">
      {/* Left Section */}
      <div className="left-section">
        <p className="framed-text">
          {text || "Welcome to the left section! Here you can place additional text."}
        </p>
      </div>

      {/* Right Section     */}
      <div className="right-section">
        <button className="framed-button" onClick={onClick}>
          {buttonLabel || "Click Me"}
        </button>
      </div>
    </div>
  );
};

export default FramedArea;
